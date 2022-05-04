import { FC, useState } from 'react';
import ProForm, { ProFormFieldSet, ProFormText } from '@ant-design/pro-form';
import './index.less';

const Tax: FC = () => {

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
                name="referenceCode"
                label="Tax Reference Code"
                placeholder="Please input Tax Reference Code"
            />
            <ProFormText
                name="email"
                label="Tax Email"
                placeholder="Please input Tax Email"
            />
            <ProFormText
                name="phone"
                label="Tax Phone"
                placeholder="Please input Tax Phone"
            />
        </ProForm.Group>
        <ProForm.Group
            colProps={{
                span: 12,
            }}>
            <ProFormText
                name='branch'
                label="Tax Branch"
                placeholder="Please input Tax Branch"
            />
            <ProFormText
                name="website"
                label="Tax Website"
                placeholder="Please input Tax Website"
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

export default Tax;
