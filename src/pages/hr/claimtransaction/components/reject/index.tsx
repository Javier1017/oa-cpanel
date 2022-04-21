import { ProFormTextArea, ModalForm } from '@ant-design/pro-form';

interface Props {
  close: () => void;
  confirm: () => void;
  visible: boolean;
}

const Reject = ({ close, confirm, visible }: Props) => {
  const submit = async () => {
    confirm();
  };

  return (
    <>
      <ModalForm
        title="Claim Rejection"
        visible={visible}
        onFinish={submit}
        modalProps={{ onCancel: () => close(), destroyOnClose: true }}
      >
        <ProFormTextArea
          name="reason"
          placeholder="Please state a reason why you're rejecting the claim."
          label="Reason for rejecting"
          fieldProps={{
            autoSize: { minRows: 3, maxRows: 6 },
          }}
          rules={[
            {
              required: true,
              message: 'Reason is required.',
            },
          ]}
        />
      </ModalForm>
    </>
  );
};

export default Reject;
