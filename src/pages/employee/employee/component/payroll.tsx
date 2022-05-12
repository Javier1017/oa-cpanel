import React, { useState } from 'react';
import { Avatar, Button, Upload } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormDatePicker, ProFormDigit, ProFormFieldSet, ProFormSelect, ProFormSwitch, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import './index.less';
import moment from 'moment';
import type { ProColumns } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';

type DataSourceType = {
    id: number;
    bank?: string;
    acc?: string;
    children?: DataSourceType[];
};

const defaultData: DataSourceType[] = [
    {
        id: 1,
        bank: 'CIMB',
        acc: '123123213',
    },
    {
        id: 2,
        bank: 'HSBC',
        acc: '456456456',
    },
];

interface CollectionCreateFormProps {
    type: string;
    visible: boolean;
    updateVisible: (arg: boolean) => void
}

const General: React.FC<CollectionCreateFormProps> = ({ type, visible, updateVisible }) => {
    const [editableKeys, setEditableRowKeys] = useState<React.Key[]>(() =>
        defaultData.map((item) => item.id),
    );
    const [dataSource, setDataSource] = useState<DataSourceType[]>([]);
    const [position, setPosition] = useState<'top' | 'bottom' | 'hidden'>('bottom');
    const Validator = {
        NUMERIC_ONLY: { pattern: /^[0-9]+$/, message: 'This field can only contain numeric values' },
    };
    const columns: ProColumns<DataSourceType>[] = [
        {
            title: '#',
            dataIndex: 'id',
            readonly: true,
            width: '40px'
        },
        {
            title: 'Bank',
            dataIndex: 'bank',
            valueType: 'select',
            valueEnum: {
                CIMB: 'CIMB',
                HSBC: 'HSBC',
            },
        },
        {
            title: 'Account Number',
            dataIndex: 'acc',
        },
        {
            title: 'Action',
            valueType: 'option',
            render: (text, record, _, action) => [
                <a
                    key="delete"
                    onClick={() => {
                        setDataSource(dataSource.filter((item) => item.id !== record.id));
                    }}
                >
                    Delete
                </a>
            ],
        },
    ];
    return (
        <div className='payroll'>
            {type == 'add' ?
                <ProForm
                    submitter={{
                        searchConfig: {
                            submitText: 'Confirm',
                            resetText: 'Back'
                        },
                        onReset: () => updateVisible(false)
                    }}
                    grid={true}
                    layout='horizontal'
                    rowProps={{
                        gutter: 2,
                    }}
                >
                    <div className='payrollHeader'>
                        Salary
                    </div>
                    <ProForm.Group
                        colProps={{
                            span: 24,
                        }}>
                        <ProFormSelect
                            colProps={{
                                span: 12,
                            }}
                            name="salaryType"
                            label="Salary Type"
                            options={[
                                { label: 'Monthly', value: 'Monthly' },
                                { label: 'Weekly', value: 'Weekly' },
                            ]}
                            placeholder="Salary Type"
                            rules={[{ required: true }]}
                        />
                        <ProFormText
                            colProps={{
                                span: 12,
                            }}
                            name="basicSalary"
                            label="Basic Salary"
                            placeholder="Basic Salary"
                            rules={[{ required: true }]}
                        />
                    </ProForm.Group>
                    <ProForm.Group
                        colProps={{
                            span: 24,
                        }}>
                        <ProFormSelect
                            colProps={{
                                span: 12,
                            }}
                            name="payFrequency"
                            label="Pay Frequency"
                            options={[
                                { label: 'Monthly', value: 'Monthly' },
                                { label: 'Weekly', value: 'Weekly' },
                            ]}
                            placeholder="Pay Frequency"
                            rules={[{ required: true }]}
                        />
                    </ProForm.Group>
                    <div className='payrollHeader'>
                        Tax
                    </div>
                    <ProForm.Group
                        colProps={{
                            span: 24,
                        }}>
                        <ProFormSelect
                            colProps={{
                                span: 8,
                            }}
                            name="TaxCategory"
                            label="Tax Category"
                            options={[
                                { label: 'CAT1', value: 'cat1' },
                                { label: 'CAT2', value: 'cat2' },
                            ]}
                            placeholder="Tax Category"
                            rules={[{ required: true }]}
                        />
                        <ProFormText
                            colProps={{
                                span: 8,
                            }}
                            name="TaxNumber"
                            label="Tax Number"
                            placeholder="Tax Number"
                            rules={[{ required: true }]}
                        />
                        <ProFormText
                            colProps={{
                                span: 8,
                            }}
                            name="TaxBranch"
                            label="Tax Branch"
                            placeholder="Tax Branch"
                            rules={[{ required: true }]}
                        />
                    </ProForm.Group>
                    <ProForm.Group
                        colProps={{
                            span: 24,
                        }}>
                        <ProFormSwitch
                            colProps={{
                                span: 8,
                            }}
                            name="selfDisable"
                            label="Self Disabled"
                        />
                        <ProFormSwitch
                            colProps={{
                                span: 8,
                            }}
                            name="spouseDisable"
                            label="Spouse Disabled"
                        />
                        <ProFormSwitch
                            colProps={{
                                span: 8,
                            }}
                            name="borne"
                            label="Borne by Employer"
                        />
                    </ProForm.Group>
                    <div className='payrollHeader'>
                        Payment Method
                    </div>
                    <EditableProTable<DataSourceType>
                        rowKey="id"
                        maxLength={5}
                        // recordCreatorProps={{ lang: "en", creatorButtonText: "add row" }}
                        recordCreatorProps={
                            position !== 'hidden'
                                ? {
                                    position: position as 'top',
                                    record: (id) => ({ id: id + 1 }),
                                    creatorButtonText: "Add row"
                                }
                                : false
                        }
                        loading={false}
                        columns={columns}
                        request={async () => ({
                            data: defaultData,
                            total: 3,
                            success: true,
                        })}
                        value={dataSource}
                        onChange={setDataSource}
                        editable={{
                            type: 'multiple',
                            editableKeys,
                            onSave: async (rowKey, data, row) => {
                                console.log(rowKey, data, row);
                            },
                            onChange: setEditableRowKeys,
                        }}
                    />
                    <div className='payrollHeader'>
                        SSS
                    </div>
                    <ProForm.Group>
                        <ProFormText
                            colProps={{
                                span: 12,
                            }}
                            name="SSSNumber"
                            label="SSS Number"
                            placeholder="SSS Number"
                        />
                        <ProFormSelect
                            colProps={{
                                span: 12,
                            }}
                            name="SSSCategory"
                            label="SSS Category"
                            options={[
                                { label: 'CAT1', value: 'cat1' },
                                { label: 'CAT2', value: 'cat2' },
                            ]}
                            placeholder="SSS Category"
                        />

                    </ProForm.Group>
                    <div className='payrollHeader'>
                        PHIC
                    </div>
                    <ProForm.Group>
                        <ProFormSelect
                            colProps={{
                                span: 12,
                            }}
                            name="PHICCategory"
                            label="PHIC Category"
                            options={[
                                { label: 'CAT1', value: 'cat1' },
                                { label: 'CAT2', value: 'cat2' },
                            ]}
                            placeholder="PHIC Category"
                        />
                        <ProFormText
                            colProps={{
                                span: 12,
                            }}
                            name="PHICNumber"
                            label="PHIC Number"
                            placeholder="PHIC Number"
                        />
                    </ProForm.Group>
                    <ProFormSwitch
                        name="payPHIC"
                        label="Pay PHIC?"
                    />
                </ProForm>
                :
                <ProForm
                    submitter={{
                        searchConfig: {
                            submitText: 'Confirm',
                            resetText: 'Back'
                        },
                        onReset: () => updateVisible(false)
                    }}
                    grid={true}
                    layout='horizontal'
                    rowProps={{
                        gutter: 2,
                    }}
                >
                    <div className='payrollHeader'>
                        Salary
                    </div>
                    <ProForm.Group
                        colProps={{
                            span: 24,
                        }}>
                        <ProFormSelect
                            initialValue='Monthly'
                            colProps={{
                                span: 12,
                            }}
                            name="salaryType"
                            label="Salary Type"
                            options={[
                                { label: 'Monthly', value: 'Monthly' },
                                { label: 'Weekly', value: 'Weekly' },
                            ]}
                            placeholder="Salary Type"
                            rules={[{ required: true }]}
                        />
                        <ProFormText
                            initialValue='RM10000'
                            colProps={{
                                span: 12,
                            }}
                            name="basicSalary"
                            label="Basic Salary"
                            placeholder="Basic Salary"
                            rules={[{ required: true }]}
                        />
                    </ProForm.Group>
                    <ProForm.Group
                        colProps={{
                            span: 24,
                        }}>
                        <ProFormSelect
                            initialValue='Monthly'
                            colProps={{
                                span: 12,
                            }}
                            name="payFrequency"
                            label="Pay Frequency"
                            options={[
                                { label: 'Monthly', value: 'Monthly' },
                                { label: 'Weekly', value: 'Weekly' },
                            ]}
                            placeholder="Pay Frequency"
                            rules={[{ required: true }]}
                        />
                    </ProForm.Group>
                    <div className='payrollHeader'>
                        Tax
                    </div>
                    <ProForm.Group
                        colProps={{
                            span: 24,
                        }}>
                        <ProFormSelect
                            initialValue='CAT1'
                            colProps={{
                                span: 8,
                            }}
                            name="TaxCategory"
                            label="Tax Category"
                            options={[
                                { label: 'CAT1', value: 'cat1' },
                                { label: 'CAT2', value: 'cat2' },
                            ]}
                            placeholder="Tax Category"
                            rules={[{ required: true }]}
                        />
                        <ProFormText
                            initialValue='SG212373819237'
                            colProps={{
                                span: 8,
                            }}
                            name="TaxNumber"
                            label="Tax Number"
                            placeholder="Tax Number"
                            rules={[{ required: true }]}
                        />
                        <ProFormText
                            initialValue='Kuala Lumpur'
                            colProps={{
                                span: 8,
                            }}
                            name="TaxBranch"
                            label="Tax Branch"
                            placeholder="Tax Branch"
                            rules={[{ required: true }]}
                        />
                    </ProForm.Group>
                    <ProForm.Group
                        colProps={{
                            span: 24,
                        }}>
                        <ProFormSwitch
                            initialValue={true}
                            colProps={{
                                span: 8,
                            }}
                            name="selfDisable"
                            label="Self Disabled"
                        />
                        <ProFormSwitch
                            colProps={{
                                span: 8,
                            }}
                            name="spouseDisable"
                            label="Spouse Disabled"
                        />
                        <ProFormSwitch
                            initialValue={true}
                            colProps={{
                                span: 8,
                            }}
                            name="borne"
                            label="Borne by Employer"
                        />
                    </ProForm.Group>
                    <div className='payrollHeader'>
                        Payment Method
                    </div>
                    <EditableProTable<DataSourceType>
                        rowKey="id"
                        maxLength={5}
                        // recordCreatorProps={{ lang: "en", creatorButtonText: "add row" }}
                        recordCreatorProps={
                            position !== 'hidden'
                                ? {
                                    position: position as 'top',
                                    record: (id) => ({ id: id + 1 }),
                                    creatorButtonText: "Add row"
                                }
                                : false
                        }
                        loading={false}
                        columns={columns}
                        request={async () => ({
                            data: defaultData,
                            total: 3,
                            success: true,
                        })}
                        value={dataSource}
                        onChange={setDataSource}
                        editable={{
                            type: 'multiple',
                            editableKeys,
                            onSave: async (rowKey, data, row) => {
                                console.log(rowKey, data, row);
                            },
                            onChange: setEditableRowKeys,
                        }}
                    />
                    <div className='payrollHeader'>
                        SSS
                    </div>
                    <ProForm.Group>
                        <ProFormText
                            initialValue="21478324321"
                            colProps={{
                                span: 12,
                            }}
                            name="SSSNumber"
                            label="SSS Number"
                            placeholder="SSS Number"
                        />
                        <ProFormSelect
                            initialValue="CAT1"
                            colProps={{
                                span: 12,
                            }}
                            name="SSSCategory"
                            label="SSS Category"
                            options={[
                                { label: 'CAT1', value: 'cat1' },
                                { label: 'CAT2', value: 'cat2' },
                            ]}
                            placeholder="SSS Category"
                        />

                    </ProForm.Group>
                    <div className='payrollHeader'>
                        PHIC
                    </div>
                    <ProForm.Group>
                        <ProFormSelect
                            initialValue="CAT1"
                            colProps={{
                                span: 12,
                            }}
                            name="PHICCategory"
                            label="PHIC Category"
                            options={[
                                { label: 'CAT1', value: 'cat1' },
                                { label: 'CAT2', value: 'cat2' },
                            ]}
                            placeholder="PHIC Category"
                        />
                        <ProFormText
                            initialValue="7213732443"
                            colProps={{
                                span: 12,
                            }}
                            name="PHICNumber"
                            label="PHIC Number"
                            placeholder="PHIC Number"
                        />
                    </ProForm.Group>
                    <ProFormSwitch
                        name="payPHIC"
                        label="Pay PHIC?"
                    />
                </ProForm>
            }

        </div>
    );
};

export default General;
