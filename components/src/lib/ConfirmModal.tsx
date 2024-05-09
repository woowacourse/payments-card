import CompoundModal, { CompoundModalProps } from './CompoundModal';

interface ConfirmModalProps extends CompoundModalProps {
  title?: string;
  onCancel: () => void;
  onConfirm: () => void;
}
export default function ConfirmModal({
  title,
  children,
  position = 'center',
  size = 'medium',
  onCancel,
  onConfirm,
}: ConfirmModalProps) {
  return (
    <CompoundModal
      position={position}
      size={size}
      onCancel={onCancel}
      onConfirm={onConfirm}
    >
      {title && (
        <CompoundModal.title style={{ marginBottom: '10px' }}>
          {title}
        </CompoundModal.title>
      )}
      {children}
      <CompoundModal.buttonContainer align='right'>
        <CompoundModal.button buttonTheme='secondary' cancelButton>
          취소
        </CompoundModal.button>
        <CompoundModal.button buttonTheme='primary' confirmButton>
          확인
        </CompoundModal.button>
      </CompoundModal.buttonContainer>
    </CompoundModal>
  );
}
