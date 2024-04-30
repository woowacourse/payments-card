import Modal from '..';

import CloseButtonIcon from '../CloseButtonIcon';
import styles from './style.module.css';

export default function BasicCenterModal(props: BasicModalProps) {
  return (
    <Modal isOpen={props.isOpen} closeModal={props.closeModal} type="center">
      <Modal.Header className={styles.header}>
        <Modal.Title className={styles.title}>{props.title}</Modal.Title>
        <Modal.CloseButton className={styles.closeButton}>
          <CloseButtonIcon />
        </Modal.CloseButton>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
}
