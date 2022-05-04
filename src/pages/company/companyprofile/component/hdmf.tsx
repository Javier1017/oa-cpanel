import { FC, useState } from 'react';
import ProForm, { ProFormFieldSet, ProFormText } from '@ant-design/pro-form';
import './index.less';

const HDMF: FC = () => {

return (
    <div className='comProfile'>
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
                label="HDMF Employer Code"
                placeholder="Please input HDMF Employer Code"
            />
            <ProFormText
                name="email"
                label="HDMF Email"
                placeholder="Please input HDMF Email"
            />
            <ProFormText
                name="phone"
                label="HDMF Phone"
                placeholder="Please input HDMF Phone"
            />
        </ProForm.Group>
        <ProForm.Group
            colProps={{
                span: 12,
            }}>
            <ProFormText
                name='branch'
                label="HDMF Branch"
                placeholder="Please input HDMF Branch"
            />
            <ProFormText
                name="website"
                label="HDMF Website"
                placeholder="Please input HDMF Website"
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
    </div>
  );

};

export default HDMF;
