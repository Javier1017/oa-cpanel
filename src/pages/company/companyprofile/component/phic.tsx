import { FC, useState } from 'react';
import ProForm, { ProFormFieldSet, ProFormText } from '@ant-design/pro-form';
import './index.less';

const PHIC: FC = () => {

return (
    <ProForm
        submitter={false}
        grid={true}
        layout='horizontal'
        rowProps={{
        gutter: 2,
        }}
    >
        <ProForm.Group
        colProps={{
            span: 12,
          }}>
            <ProFormText
                name="employerCode"
                label="PHIC Employer Code"
                placeholder="Please input PHIC Employer Code"
            />
            <ProFormText
                name="email"
                label="PHIC Email"
                placeholder="Please input PHIC Email"
            />
            <ProFormText
                name="phone"
                label="PHIC Phone"
                placeholder="Please input PHIC Phone"
            />
        </ProForm.Group>
        <ProForm.Group
            colProps={{
                span: 12,
            }}>
            <ProFormText
                name='branch'
                label="PHIC Branch"
                placeholder="Please input PHIC Branch"
            />
            <ProFormText
                name="website"
                label="PHIC Website"
                placeholder="Please input PHIC Website"
            />
            <ProFormText
                name="remark"
                label="Remarks"
                placeholder="Please input Remarks"
            />
        </ProForm.Group>
        <ProForm.Group
            colProps={{
                span: 24,
            }}>
            <ProFormFieldSet
               name="address"
               label="Address"
            >
                <ProFormText
                    placeholder="Address 1"
                />
                <ProFormText
                    placeholder="Address 2"
                />
            </ProFormFieldSet>
        </ProForm.Group>
    </ProForm>
  );
};

export default PHIC;
