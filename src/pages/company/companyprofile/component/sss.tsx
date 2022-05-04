import { FC, useState } from 'react';
import ProForm, { ProFormFieldSet, ProFormText } from '@ant-design/pro-form';
import './index.less';

const SSS: FC = () => {

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
                label="SSS Employer Code"
                placeholder="Please input SSS Employer Code"
            />
            <ProFormText
                name="email"
                label="SSS Email"
                placeholder="Please input SSS Email"
            />
            <ProFormText
                name="phone"
                label="SSS Phone"
                placeholder="Please input SSS Phone"
            />
        </ProForm.Group>
        <ProForm.Group
            colProps={{
                span: 12,
            }}>
            <ProFormText
                name='branch'
                label="SSS Branch"
                placeholder="Please input SSS Branch"
            />
            <ProFormText
                name="website"
                label="SSS Website"
                placeholder="Please input SSS Website"
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

export default SSS;
