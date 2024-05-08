import styled from "@emotion/styled";
import { ModalProps } from "./Modal";

interface ModalDimProps {
  isOpen: boolean;
}

export const ModalDim = styled.div<ModalDimProps>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  z-index: 1000;
`;

export const ModalContainer = styled.div<Pick<ModalProps, "modalPosition" | "closeButtonPosition">>`
  display: flex;
  z-index: 1001;
  flex-direction: column;
  ${({ closeButtonPosition }) =>
    closeButtonPosition === "bottom" && "justify-content: space-between;"}
  gap: 16px;
  position: absolute;
  min-height: 216px;
  max-height: 70%;
  padding: 24px 32px;
  box-sizing: border-box;
  border-radius: 8px;
  background: rgba(255, 255, 255, 1);
  color: rgba(0, 0, 0, 1);

  ${({ modalPosition }) => {
    switch (modalPosition) {
      case "center":
        return `
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 304px;
        `;
      case "bottom":
        return `
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
        `;
      default:
        return "";
    }
  }}
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h1 {
    width: 100%;
    font-family: Noto Sans KR;
    font-size: 18px;
    font-weight: 700;
    line-height: 26.06px;
    text-align: left;
    color: rgba(0, 0, 0, 1);

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;