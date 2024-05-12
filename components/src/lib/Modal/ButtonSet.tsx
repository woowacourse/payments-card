import { DarkButton, LightButton } from "../common/Button";
import { InputWrapper } from "../common/Input.style";
import { ModalButtonGroup } from "./Modal.style";
import { ModalProps } from "./ModalType";

export const ButtonSet = ({ modalType, onClose }: Pick<ModalProps, "modalType" | "onClose">) => {
  switch (modalType) {
    case "alert":
      return (
        <ModalButtonGroup>
          <DarkButton children="확인" onClick={onClose} />
        </ModalButtonGroup>
      );
    case "confirm":
      return (
        <ModalButtonGroup>
          <LightButton children="취소" onClick={onClose} />
          <DarkButton children="확인" onClick={onClose} />
        </ModalButtonGroup>
      );
    case "prompt":
      return (
        <>
          <InputWrapper type="text" />
          <ModalButtonGroup>
            <LightButton children="취소" onClick={onClose} />
            <DarkButton children="확인" onClick={onClose} />
          </ModalButtonGroup>
        </>
      );
    default:
      return null;
  }
};