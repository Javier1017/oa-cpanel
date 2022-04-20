import { useState } from 'react';
import type { LeaveTransactionItem } from '../../data';
import { ModalForm } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
import { Button, Image } from 'antd';
import styles from './index.less';
import moment from 'moment';
import PreviewModal from '../preview';

interface propsData {
  data: LeaveTransactionItem | null;
  show: boolean;
  approve: () => void;
  reject: () => void;
  close: () => void;
}

interface Duration {
  to: number;
  from: number;
}

const formatDuration = ({ to, from }: Duration) => {
  const format = 'YYYY-MM-DD';
  return `${moment(to).format(format)} to ${moment(from).format(format)}`;
};

const Details = ({ data, show, reject, approve, close }: propsData) => {
  const [showPreview, setShowPreview] = useState(false);
  const [currentImg, setCurrentImg] = useState('');

  const preview = (src: string) => {
    setCurrentImg(src);
    setShowPreview(true);
  };

  const sampleImages = (
    <div className={styles.thumbnail}>
      <Image
        className={styles.thumbnailImg}
        preview={{ visible: false }}
        src="https://via.placeholder.com/300"
        onClick={() => preview('https://via.placeholder.com/300')}
      />
    </div>
  );

  const closePreview = () => {
    setShowPreview(false);
    setCurrentImg('');
  };

  return (
    <>
      <PreviewModal image={currentImg} visible={showPreview} close={closePreview} />
      <ModalForm
        title={false}
        visible={show}
        modalProps={{ destroyOnClose: true, onCancel: () => close() }}
        submitter={{
          render: () => [
            <Button type="primary" danger key="reject" onClick={() => reject()}>
              Reject
            </Button>,
            <Button type="primary" key="approve" onClick={() => approve()}>
              Approve
            </Button>,
          ],
        }}
      >
        {data?.id && (
          <>
            <p style={{ fontSize: '16px', fontWeight: '500' }}>Leave Details</p>
            <ProDescriptions<LeaveTransactionItem>
              className={styles.detailsForm}
              column={2}
              title={false}
              request={async () => ({
                data: data || {},
              })}
              params={{
                id: data?.id,
              }}
              columns={[
                {
                  title: 'Employee Code',
                  dataIndex: 'employeeCode',
                },
                {
                  title: 'Department',
                  dataIndex: 'department',
                },
                {
                  title: 'Employee',
                  dataIndex: 'employee',
                },
                {
                  title: 'Applied Time',
                  dataIndex: 'appliedTime',
                  valueType: 'dateTime',
                },
                {
                  title: 'Leave Type',
                  dataIndex: 'leaveType',
                },
                {
                  title: 'Days',
                  dataIndex: 'days',
                },
                {
                  title: 'Date',
                  dataIndex: 'from',
                  renderText: (value, item) => formatDuration({ to: item.to, from: value }),
                },
                {
                  title: 'Reasons',
                  dataIndex: 'reasons',
                  renderText: () => 'reasonblablablabla',
                },
                {
                  title: 'Attachments',
                  dataIndex: 'attachments',
                  render: () => sampleImages,
                },
              ]}
            />
          </>
        )}
      </ModalForm>
    </>
  );
};

export default Details;
