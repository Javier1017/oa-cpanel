import { Modal, Image, Button, Row } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import styles from './index.less';

interface Props {
  image: string;
  visible: boolean;
  close: () => void;
}
const Preview = ({ image, visible, close }: Props) => {
  return (
    <Modal
      className={styles.previewModal}
      visible={visible}
      footer={false}
      onCancel={() => close()}
      destroyOnClose
    >
      <div className={styles.previewWrapper}>
        <Image preview={false} width={200} src={image} />
      </div>
      <Row style={{ marginTop: '0.5rem' }} justify="center">
        <Button type="primary" icon={<DownloadOutlined />} size={'middle'}>
          Download
        </Button>
      </Row>
    </Modal>
  );
};

export default Preview;
