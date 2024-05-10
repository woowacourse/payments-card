import { PropsWithChildren } from "react";
import Modal, { PositionProps, SizeProps, TitleProps } from "../Modal";

interface AlertModalProps {
  position: PositionProps;
  size?: SizeProps;
  title?: TitleProps;
  isOpen: boolean;
  confirmButton: {
    content: string;
    onConfirm: () => void;
  };
}

const AlertModal = ({
  position,
  size,
  title,
  children,
  isOpen,
  confirmButton,
}: PropsWithChildren<AlertModalProps>) => {
  const footerClassName = "alertModalFooter";
  const footerButtons = [
    {
      content: confirmButton.content || "확인",
      onClick: confirmButton.onConfirm,
      className: "confirmButton",
      style: {
        background: "rgba(51, 51, 51, 1)",
        color: "white",
        width: "80px",
      },
    },
  ];

  return (
    <>
      <Modal
        position={position}
        size={size}
        title={title}
        isOpen={isOpen}
        footerClassName={footerClassName}
        footerButtons={footerButtons}
      >
        {children}
      </Modal>
    </>
  );
};

export default AlertModal;