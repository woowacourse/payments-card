export type StyleSize = 'small' | 'medium' | 'large';
export type StyleDirection = 'row' | 'column';
export type StyleAlign = 'start' | 'center' | 'end';
export type StylePosition = 'center' | 'bottom';

export interface BasicModal {
  title: string;
  message?: string;
  isCloseIcon?: boolean;
  onModalClose: () => void;
  $modalSize?: StyleSize;
  $position?: StylePosition;
  $contentDirection?: StyleDirection;
  $footerDirection?: StyleDirection;
  $algin?: StyleAlign;
  $buttonSize?: StyleSize;
  $buttonBackgroundColor?: string;
  $buttonColor?: string;
}