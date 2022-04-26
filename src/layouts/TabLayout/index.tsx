/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import React, { useMemo, useState, useEffect } from 'react';
import type { BasicLayoutProps } from '@ant-design/pro-layout';
import ProLayout, { PageContainer } from '@ant-design/pro-layout';
import { Link, history, useModel, traverseModifyRoutes, useAccess } from 'umi';
import getLayoutRenderConfig from './getLayoutRenderConfig';
import { getMatchMenu, transformRoute } from '@umijs/route-utils';
import renderRightContent from '../renderRightContent';
import styles from './style.less';
const TabLayout = (props: any) => {
  const { children, userConfig = {}, location, route, ...restProps } = props;

  const initialInfo = (useModel && useModel('@@initialState')) || {
    initialState: undefined,
    loading: false,
    setInitialState: null,
  };

  const { initialState, loading, setInitialState } = initialInfo;

  const currentPathConfig = useMemo(() => {
    const { menuData } = transformRoute(props?.route?.routes || [], undefined, undefined, true);
    // 动态路由匹配
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const currentPathConfig = getMatchMenu(location.pathname, menuData).pop();
    return currentPathConfig || {};
  }, [location?.pathname, props?.route?.routes]);

  // layout 是否渲染相关
  const layoutRestProps: BasicLayoutProps & {
    rightContentRender?:
      | false
      | ((props: BasicLayoutProps, dom: React.ReactNode, config: any) => React.ReactNode);
  } = {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    itemRender: (route) => <Link to={route.path}>{route.breadcrumbName}</Link>,
    ...userConfig,
    ...restProps,
    ...getLayoutRenderConfig((currentPathConfig as any) || {}),
  };

  const access = useAccess?.();

  const [activeKey, setActiveKey] = useState(props.location.pathname);

  const [pages, setPages] = useState([
    {
      key: '/dashboard',
      tab: '首页',
      path: '/dashboard',
    },
  ]);

  const handleTabChange = (key: string) => {
    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    setActiveKey(key);
    history.push(`${url}${key}`);
  };

  const menuItemClickHandler = (menuItem: any) => {
    const checkPages = pages.filter((page) => page.key === menuItem.key);
    setActiveKey(menuItem.key);
    if (checkPages.length === 0) {
      setPages([
        ...pages,
        {
          key: menuItem.key,
          tab: menuItem.name,
          path: menuItem.path,
        },
      ]);
    }
  };

  const remove = (targetKey: any) => {
    let newActiveKey = activeKey;
    let lastIndex = 0;

    pages.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const newPanes = pages.filter((pane: any) => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }

    const { match } = props;
    const url = match.url === '/' ? '' : match.url;
    history.push(`${url}${newActiveKey}`);
    setPages(newPanes);
    setActiveKey(newActiveKey);
  };

  return (
    <ProLayout
      route={route}
      location={location}
      title={userConfig?.name || userConfig?.title}
      navTheme="dark"
      onMenuHeaderClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        history.push('/');
      }}
      menu={{ locale: userConfig.locale }}
      menuDataRender={
        userConfig.patchMenus
          ? (menuData) => userConfig?.patchMenus(menuData, initialInfo)
          : undefined
      }
      formatMessage={userConfig?.formatMessage}
      menuItemRender={(menuItemProps: any, defaultDom) => {
        if (menuItemProps.isUrl) {
          return defaultDom;
        }
        useEffect(() => {
          const checkPages = pages.filter((page) => page.key === menuItemProps.key);
          if (props.location.pathname === menuItemProps.path && checkPages.length === 0) {
            setPages([
              ...pages,
              {
                key: menuItemProps.key,
                tab: menuItemProps.name,
                path: menuItemProps.path,
              },
            ]);
          }
        }, []);
        if (menuItemProps.path && location.pathname !== menuItemProps.path) {
          return (
            <Link
              to={menuItemProps.path}
              target={menuItemProps.target}
              onClick={() => menuItemClickHandler(menuItemProps)}
            >
              {defaultDom}
            </Link>
          );
        }
        return defaultDom;
      }}
      fixSiderbar
      fixedHeader
      postMenuData={
        traverseModifyRoutes
          ? (menuData: any) => traverseModifyRoutes?.(menuData, access)
          : undefined
      }
      rightContentRender={
        // === false 应该关闭这个功能
        layoutRestProps?.rightContentRender !== false &&
        ((layoutProps) => {
          const dom = renderRightContent?.(userConfig, loading, initialState, setInitialState);
          if (layoutRestProps?.rightContentRender) {
            return layoutRestProps.rightContentRender(layoutProps, dom, {
              userConfig,
              loading,
              initialState,
              setInitialState,
            });
          }
          return dom;
        })
      }
    >
      <PageContainer
        className={styles.tabLayout}
        title={false}
        breadcrumb={{}}
        tabProps={{
          type: 'editable-card',
          hideAdd: true,
          onEdit: remove,
        }}
        tabList={pages}
        tabActiveKey={activeKey}
        onTabChange={handleTabChange}
      >
        {props.children}
      </PageContainer>
    </ProLayout>
  );
};

export default TabLayout;
