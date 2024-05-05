import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from './style.module.css';
import '../../styles/reset.css';
import clsx from 'clsx';
interface PortalProps {
  children: ReactNode;
}
export default function Portal(props: PortalProps) {
  const { children } = props;

  const $modalRoot = document.getElementById('modal-root') as HTMLDivElement;
  const stopModalPropagation = (e: globalThis.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    document.getElementsByTagName('body')[0].addEventListener('click', stopModalPropagation);

    return () => {
      document.getElementsByTagName('body')[0].removeEventListener('click', stopModalPropagation);
    };
  }, []);

  return createPortal(
    <div className={clsx(styles.portal, 'modal-portal')}>{children}</div>,
    $modalRoot,
    'modal-portal',
  );
}