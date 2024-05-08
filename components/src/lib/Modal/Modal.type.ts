import { BUTTON_COLOR_MAP, MODAL_SIZE_CLASS_NAME_MAP } from './Modal.constant';

export type ModalPosition = 'center' | 'bottom';

export type ModalSize = keyof typeof MODAL_SIZE_CLASS_NAME_MAP;

export type FlexDirection = 'column' | 'row';

export type ButtonColorType = keyof typeof BUTTON_COLOR_MAP;
