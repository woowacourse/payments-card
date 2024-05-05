import { useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

import useModalCloseClickDimmer from './hooks/useModalCloseClickDimmer';
import useCloseOnESCKeyDown from './hooks/useCloseOnESC';

type ModalType = 'dialog' | 'drawer';

interface ModalStyle {
  dimmed?: React.CSSProperties;
  modal?: React.CSSProperties;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  type: ModalType;
  style?: ModalStyle;
  closeOnOutsideClick?: boolean;
  closeOnESCKeydown?: boolean;
}

const MODAL_TYPE: Record<ModalType, string> = {
  dialog: styles.dialog,
  drawer: styles.drawer,
};

const Modal = ({
  open,
  onClose,
  type,
  style,
  closeOnOutsideClick = true,
  closeOnESCKeydown = false,
  children,
}: React.PropsWithChildren<ModalProps>) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useModalCloseClickDimmer(modalRef, onClose, closeOnOutsideClick);
  useCloseOnESCKeyDown(onClose, closeOnESCKeydown);

  return (
    <>
      {open &&
        createPortal(
          <div className={styles.dimmed} style={style?.dimmed}>
            <section className={MODAL_TYPE[type]} ref={modalRef} style={style?.modal}>
              {children}
            </section>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Modal;