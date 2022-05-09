import React from 'react';
import './index.less';
import { ModalForm, ProFormCheckbox, ProFormDateTimePicker, ProFormDigit, ProFormGroup, ProFormRadio, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-form';
import { Checkbox } from 'antd';

interface CollectionCreateFormProps {
  title: string;
  typeVisible: boolean;
  onCancel: () => void;
}

const leaveType: React.FC<CollectionCreateFormProps> = ({ title, typeVisible, onCancel }) => {

  return (
    <ModalForm
      className='leaveType'
      modalProps={{
        onCancel: () => onCancel(),
      }}
      width={1000}
      title={title}
      visible={typeVisible}
      layout='horizontal'
      submitter={{
        searchConfig: {
          submitText: 'Confirm',
        },
      }}
    >
      <ProFormText
        name="leaveType"
        label="Leave Type"
        placeholder="Leave Type"
        rules={[
          {
            required: true,
            message: "Please input Leave Type"
          },
        ]}
      />
      <ProFormRadio.Group
        name="gender"
        label="Gender"
        options={[
          {
            label: 'Male',
            value: 'male',
          },
          {
            label: 'Female',
            value: 'female',
          },
        ]}
        rules={[
          {
            required: true,
            message: "Please select Gender"
          },
        ]}
      />
      <ProFormTextArea
        name="desc"
        label="Descriptions"
        placeholder="Descriptions"
      />
      <ProFormCheckbox
        width="md"
        name="limited"
        label=""
      >Limited?</ProFormCheckbox>
      <ProFormGroup
        // grid={true}
        colProps={{
          span: 24,
        }}
      >
        <ProFormCheckbox
          // width="sm"
          name="unpaid"
          label=""
        >
          Unpaid Leave?
        </ProFormCheckbox>
        <ProFormCheckbox
          // width="sm"
          name="carryForward"
          label=""
        >
          Allow Carry Forward?
        </ProFormCheckbox>
      </ProFormGroup>
      <Checkbox className='leaveTypeCheckbox'>
        Maximum of &nbsp;
        <ProFormDigit
          name="input-number"
          placeholder=""
          min={1}
          max={10}
          width={60}>
        </ProFormDigit>
        &nbsp; days of previous year’s leave balance can be carry forward to the following year.


      </Checkbox>
      <Checkbox className='leaveTypeCheckbox'>
        Leave balance carry forward must be consumed before &nbsp;
        <ProFormDateTimePicker width={120} name="datetime" />
        &nbsp; ,or else it will be forfeited.


      </Checkbox>

      <ProFormSelect
        name="serviceYear"
        label="Calculation Year Of Service by"
        placeholder="Leave Type"
        options={[
          { label: 'Confirm Date', value: 'confirm' },
          { label: 'Probation Date', value: 'probation' },
        ]}
        rules={[
          {
            required: true,
            message: "Please input date"
          },
        ]}
      />
      <ProFormSelect
        name="leaveRoundUp"
        label="Leave Round Up"
        placeholder="Leave Round Up"
        tooltip="Leave Round Up"
        options={[
          { label: '0.5', value: '0.5' },
        ]}
        rules={[
          {
            required: true,
            message: "Please input Leave Round Up"
          },
        ]}
      />
      <ProFormSelect
        name="leaveCalculationMethod"
        label="Leave Calculation Method"
        placeholder="Leave Calculation Method"
        tooltip="Leave Calculation Method"
        options={[
          { label: 'Days Method', value: 'day' },
        ]}
        rules={[
          {
            required: true,
            message: "Leave Calculation Method"
          },
        ]}
      />
      <ProFormRadio.Group
        name="applyLeave"
        label="Apply Leave"
        options={[
          {
            label: 'Use Entitlement Days',
            value: 'Entitlement',
          },
          {
            label: 'Use Earned Days',
            value: 'Earned',
          },
        ]}
        rules={[
          {
            required: true,
            message: "Please select apply leave"
          },
        ]}
      />
      <ProFormRadio.Group
        name="unpaidCalculation"
        label="Unpaid Leave Per Day Calculation"
        options={[
          {
            label: 'Use Working Days',
            value: 'workingDay',
          },
          {
            label: 'Use Number of Days in the calendar month',
            value: 'numCalender',
          },
        ]}
        rules={[
          {
            required: true,
            message: "Please select Unpaid Leave Per Day Calculation"
          },
        ]}
      />
      <ProFormRadio.Group
        name="paidCalculation"
        label="Paid Leave Per Day Calculation"
        options={[
          {
            label: 'Use Working Days',
            value: 'workingDay',
          },
          {
            label: 'Use Number of Days in the calendar month',
            value: 'numCalender',
          },
        ]}
        rules={[
          {
            required: true,
            message: "Please select Paid Leave Per Day Calculation"
          },
        ]}
      />
    </ModalForm>
  );
};

export default leaveType;
