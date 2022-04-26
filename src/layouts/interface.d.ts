/**
 * 插件运行时配置
 */
export interface ILayoutRuntimeConfig {
  /** 导航用户退出的逻辑 默认不做处理 */
  logout?: (initialState: any) => void;

  // TODO IMPORT initinfo  type from init plugin
  /** 自定义导航头右上角 ，有默认 UI, 接受 initialState & 修改 initialState 的方法 */
  rightRender?: (
    initialState: any,
    setInitialState: any,
    runtimeLayout: ILayoutRuntimeConfig,
  ) => React.ReactNode;

  errorBoundary?: {
    /** 发生错误后的回调（可做一些错误日志上报，打点等） */
    onError?: (error: Error, info: any) => void;
    /** 发生错误后展示的组件，接受 error */
    ErrorComponent?: (error: Error) => React.ReactElement<any>;
  };
}
