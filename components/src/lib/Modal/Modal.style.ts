import styled from 'styled-components';
import { ModalPositionType } from './Modal';

export const COLORS = {
  grey100: '#ffffff',
  grey200: '#eeeeee',
  grey300: '#8b95a1',
  grey400: '#666666',
  grey500: '#444444',
  grey600: '#333333',
  grey700: '#000000',
};

export const ModalPositioner = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ModalBackdrop = styled.div<{
  $opacity: string;
  $zIndex: number;
}>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${COLORS.grey700};
  opacity: ${(props) => props.$opacity};
  z-index: ${(props) => props.$zIndex};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div<{
  $position: ModalPositionType;
  $width: { basicWidth: string; minWidth: string };
  $zIndex: number;
}>`
  background: ${COLORS.grey100};
  min-width: ${(props) => props.$width.minWidth};
  width: ${(props) => props.$width.basicWidth};
  color: ${COLORS.grey700};
  padding: 24px 32px;
  z-index: ${(props) => props.$zIndex};

  display: flex;
  flex-direction: column;
  gap: 16px;

  ${(props) => {
    if (props.$position === 'center') {
      return `
        margin: auto;
        border-radius: 10px;
      `;
    }
    if (props.$position === 'bottom') {
      return `
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        border-radius: 10px 10px 0 0;
      `;
    }
  }}
`;