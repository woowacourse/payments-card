type ModalType = 'center' | 'bottom';

type CloseButtonType = 'icon' | 'box';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  type: ModalType;
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

interface BasicModalProps extends Omit<ModalProps, 'type'> {
  modalTitle: string;
  closeButtonType: CloseButtonType;
}

interface ModalComposedProps<T> extends React.HTMLAttributes<T> {
  children: ReactNode;
}

interface ModalButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: ReactNode;
}
interface ActionAndCloseButtonProps<A> extends ModalButtonProps {
  extraAction?: A;
}