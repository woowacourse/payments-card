import { PropsWithChildren, useEffect, useState } from "react";
import { ModalProvider } from "./ModalProvider";
import { ModalContextType } from "./ModalContext";
import { PropsWithChildren } from "react";
import { ModalProvider } from "./ModalProvider";
import { ModalContextType, useModal } from "./ModalContext";
import ModalPortal from "./ModalPortal";
import ModalBackdrop from "./ModalBackdrop";
import ModalCloseButton from "./ModalCloseButton";
import Container from "./Container";

export default function Modal({
  children,
  isOpen = false,
  onClose = (event?: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  mountAnimation = "",
  unMountAnimation = "",
  position = "center",
  animationTime = 300,
  size = "",
}: PropsWithChildren<Partial<ModalContextType>>) {
  const [closing, setClosing] = useState(false);
  const [open, setOpen] = useState(isOpen);

  const sizeClassName =
    size === "large"
      ? styles.large
      : size === "medium"
        ? styles.medium
        : size === "small"
          ? styles.small
          : "";

  useEffect(() => {
    if (isOpen) {
      setOpen(true);
    } else {
      setClosing(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (closing) {
      if (unMountAnimation) {
        const timer = setTimeout(() => {
          setClosing(false);
          setOpen(false);
          onClose();
        }, animationTime);

        return () => clearTimeout(timer);
      } else {
        setClosing(false);
        setOpen(false);
        onClose();
      }
    }
  }, [closing, unMountAnimation]);

  const modalProps: ModalProviderValue = {
    isOpen,
    position,
    onClose,
    mountAnimation,
    unMountAnimation,
    animationTime,
    closing,
    open,
    sizeClassName,
    size,
  };

  return open ? (
    <ModalProvider value={modalProps}>{children}</ModalProvider>
  ) : null;
}

Modal.Portal = ModalPortal;
Modal.Backdrop = ModalBackdrop;
Modal.Container = Container;
Modal.CloseButton = ModalCloseButton;
