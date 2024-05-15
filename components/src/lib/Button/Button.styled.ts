import { ButtonSize, ButtonStyle, ButtonWidth } from './Button';
import { hoverColor, textColor } from '../utils/calculateColor';

import styled from 'styled-components';

const BUTTON_SIZE_TABLE = {
  small: { width: '100px', height: '32px', fontSize: '12px' },
  medium: { width: '160px', height: '44px', fontSize: '15px' },
  large: { width: '240px', height: '56px', fontSize: '18px' },
};

const BUTTON_STYLE_TABLE = (primaryColor: string) => {
  return {
    primary: {
      backgroundColor: primaryColor,
      color: textColor(primaryColor),
      border: 'none',
    },
    border: {
      backgroundColor: '#ffffff',
      color: primaryColor,
      border: `2px solid ${primaryColor}`,
    },
    text: {
      backgroundColor: 'transparent',
      color: primaryColor,
      border: 'none',
    },
  };
};

export const Button = styled.button<{
  size: ButtonSize;
  width: ButtonWidth;
  buttonStyle: ButtonStyle;
  primaryColor: string;
}>`
  width: ${(props) => {
    switch (props.width) {
      case 'full':
        return '100%';
      case 'fit':
        return 'fit-content';
      default:
        return BUTTON_SIZE_TABLE[props.size].width;
    }
  }};
  padding: 0 16px;
  height: ${(props) => BUTTON_SIZE_TABLE[props.size].height};
  background-color: ${(props) =>
    BUTTON_STYLE_TABLE(props.primaryColor)[props.buttonStyle].backgroundColor};
  border: ${(props) =>
    BUTTON_STYLE_TABLE(props.primaryColor)[props.buttonStyle].border};
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => {
      switch (props.buttonStyle) {
        case 'primary':
          return hoverColor(props.primaryColor);
        default:
          return hoverColor('#FFFFFF');
      }
    }};
  }
`;

export const ButtonText = styled.span<{
  size: ButtonSize;
  buttonStyle: ButtonStyle;
  primaryColor: string;
}>`
  font-size: ${(props) => BUTTON_SIZE_TABLE[props.size].fontSize};
  color: ${(props) =>
    BUTTON_STYLE_TABLE(props.primaryColor)[props.buttonStyle].color};
  font-weight: 700;
`;