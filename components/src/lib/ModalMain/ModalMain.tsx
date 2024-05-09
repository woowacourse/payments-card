import { Modal } from '..';
import styles from './ModalMain.module.css';
import { ModalSizeProps } from '../interfaces';
import { ModalHeaderProps } from '../ModalHeader/ModalHeader';
import { ModalContentProps } from '../ModalContent/ModalContent';
import { ModalFooterProps } from '../ModalFooter/ModalFooter';
import { CSSProperties } from 'react';

export interface ModalProps {
  modalHeader: ModalHeaderProps;
  modalContent?: ModalContentProps;
  modalFooter?: ModalFooterProps;
  modalPosition: 'center' | 'bottom';
  modalSize?: ModalSizeProps;
  backgroundColor?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  preventCloseOnOutsideClick?: boolean;
}

const ModalMain = ({
  modalHeader,
  modalContent,
  modalFooter,
  modalSize,
  backgroundColor,
  borderRadius,
  modalPosition,
  preventCloseOnOutsideClick,
}: ModalProps) => {
  const modalWidth = () => {
    if (modalSize) {
      switch (modalSize.width) {
        case 'small':
          return '320px';
        case 'medium':
          return '480px';
        case 'large':
          return '600px';
        default:
          return modalSize.width;
      }
    }
  };

  return (
    <>
      <div
        onClick={preventCloseOnOutsideClick ? () => {} : modalHeader.closeButton.onClose}
        className={styles['backdrop']}
      />
      <section
        style={{
          backgroundColor: `${backgroundColor || 'white'}`,
          borderRadius: `${borderRadius || '5px'}`,
          width: `${(modalSize && modalWidth()) || (modalPosition === 'center' ? '80%' : '100%')}`,
          height: `${(modalSize && modalSize.height) || 'fit-content'}`,
          minWidth: `${modalSize && modalSize.minWidth}`,
          minHeight: `${modalSize && modalSize.minHeight}`,
        }}
        className={styles[`container-${modalPosition}`]}
      >
        <Modal.Header {...modalHeader} />
        <Modal.Content {...modalContent} />
        <Modal.Footer {...modalFooter} />
      </section>
    </>
  );
};

export default ModalMain;
