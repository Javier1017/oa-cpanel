import { useState } from 'react';
import type { ClaimTransactionItem } from '../../data';
import { ModalForm } from '@ant-design/pro-form';
import ProDescriptions from '@ant-design/pro-descriptions';
import { Button, Image } from 'antd';
import styles from './index.less';
import PreviewModal from '../preview';
import RejectModal from '../reject';

interface propsData {
  data: ClaimTransactionItem | null;
  show: boolean;
  approve: () => void;
  reject: () => void;
  close: () => void;
}

const Details = ({ data, show, reject, approve, close }: propsData) => {
  const [showPreview, setShowPreview] = useState(false);
  const [currentImg, setCurrentImg] = useState('');
  const [showReject, setShowReject] = useState(false);

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

  const confirmReject = () => {
    setShowReject(false);
    reject();
  };

  return (
    <>
      <PreviewModal image={currentImg} visible={showPreview} close={closePreview} />
      <RejectModal
        visible={showReject}
        close={() => setShowReject(false)}
        confirm={() => confirmReject()}
      />
      <ModalForm
        title={false}
        visible={show}
        modalProps={{ destroyOnClose: true, onCancel: () => close() }}
        submitter={{
          render: () => [
            <Button type="primary" danger key="reject" onClick={() => setShowReject(true)}>
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
            <p style={{ fontSize: '16px', fontWeight: '500' }}>Claim Details</p>
            <ProDescriptions<ClaimTransactionItem>
              className={styles.claimDetails}
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
                  title: 'Claim Type',
                  dataIndex: 'claimType',
                },
                {
                  title: 'Claim Amount',
                  dataIndex: 'amount',
                },
                {
                  title: 'Clinic Name',
                  dataIndex: 'clinicName',
                },
                {
                  title: 'Doctor Name',
                  dataIndex: 'doctorName',
                },
                {
                  title: 'Claim For',
                  dataIndex: 'claimFor',
                },
                {
                  title: 'Remarks',
                  dataIndex: 'remarks',
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
