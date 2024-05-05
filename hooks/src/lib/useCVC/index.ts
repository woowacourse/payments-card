import REGEXPS from '../constants/regExps';
import { Validator } from '../type';
import { useState } from 'react';

const CVC_LENGTH = 3;

export const CVC_ERROR_MESSAGE = {
  invalidLength: `CVC는 ${CVC_LENGTH}자리여야 합니다.`,
  notDigit: 'CVC 값은 숫자만 포함해야 합니다.',
} as const;

type ErrorMessage = (typeof CVC_ERROR_MESSAGE)[keyof typeof CVC_ERROR_MESSAGE];

const cvcValidators: Validator<string, ErrorMessage>[] = [
  {
    checkIsValid: (cvc: string) => cvc.length === CVC_LENGTH,
    message: CVC_ERROR_MESSAGE.notDigit,
  },
  {
    checkIsValid: (cvc: string) => REGEXPS.onlyDigitNumber.test(cvc),
    message: CVC_ERROR_MESSAGE.notDigit,
  },
];

export default function useCVC() {
  const [cvc, setCVC] = useState('');

  const errorMessage = cvcValidators.reduce(
    (message: ErrorMessage | null, validator) => {
      if (message !== null) return message;
      if (validator.checkIsValid(cvc)) return message;
      return validator.message;
    },
    null
  );

  const isValid = errorMessage === null;

  return { cvc, setCVC, errorMessage, isValid };
}
