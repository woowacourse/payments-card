import type { CardType } from '../types/common.type';

interface CardTypeProperty {
  MIN_LENGTH: number;
  VALID_LENGTH: number;
  PATTERN: number[];
}

const DEFAULT_PROPERTY: CardTypeProperty = {
  MIN_LENGTH: 6,
  VALID_LENGTH: 16,
  PATTERN: [4, 4, 4, 4],
} as const;

export const CARD_TYPE: Record<CardType, CardTypeProperty> = {
  VISA: {
    ...DEFAULT_PROPERTY,
    MIN_LENGTH: 1,
  } as const,
  MASTERCARD: {
    ...DEFAULT_PROPERTY,
    MIN_LENGTH: 2,
  } as const,
  DINERS: {
    MIN_LENGTH: 2,
    VALID_LENGTH: 14,
    PATTERN: [4, 6, 4],
  } as const,
  AMEX: {
    MIN_LENGTH: 2,
    VALID_LENGTH: 15,
    PATTERN: [4, 6, 5],
  } as const,
  UNIONPAY: DEFAULT_PROPERTY,
  DEFAULT: DEFAULT_PROPERTY,
} as const;