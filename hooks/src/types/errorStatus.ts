export enum ErrorStatus {
  INVALID_LENGTH = 'invalidLength',
  EXPIRED_CARD_DATE = 'expiredCardDate',
  INVALID_MONTH = 'invalidMonth',
  INVALID_YEAR = 'invalidYear',
  NAME_SHOULD_BE_CAPITAL = 'nameCapital',
  ENTER_REQUIRED = 'enter',
  IS_NOT_NUMBER = 'isNotNumber',
  IS_DOUBLE_BLANK = 'isDoubleBlank',
  ONLY_UPPERCASE = 'onlyUpperCase',
}

export type ErrorStatusType = keyof typeof ErrorStatus;
