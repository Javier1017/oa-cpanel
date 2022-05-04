import { useState } from 'react';
import type { WorkReportItem } from '../../data';
import ProDescriptions from '@ant-design/pro-descriptions';
import { Image, Modal } from 'antd';
import styles from './index.less';
import PreviewModal from '../preview';

interface PropsShape {
  data: WorkReportItem | null;
  show: boolean;
  close: () => void;
}

const Details = ({ data, show, close }: PropsShape) => {
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
      <Modal
        title={false}
        visible={show}
        destroyOnClose
        onCancel={() => close()}
        width={800}
        footer={null}
      >
        {data?.id && (
          <>
            <p style={{ fontSize: '16px', fontWeight: '500' }}>Work Report Details</p>
            <ProDescriptions<WorkReportItem>
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
                  title: 'Created Time',
                  dataIndex: 'createdAt',
                  valueType: 'dateTime',
                },
                {
                  title: 'Report Type',
                  dataIndex: 'type',
                },
                {
                  title: 'Reason for rejecting',
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
      </Modal>
    </>
  );
};

export default Details;
