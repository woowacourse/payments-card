import useInput from './useInput';
import { validateLengthOver, validateNumber } from '../validate/validate';
import { ChangeEvent, FocusEvent } from 'react';
import { PasswordError } from '../types/password';
import { PasswordErrorMessages } from '../constants/error';

const passwordValidates = (value: string) => {
  validateNumber(value);
  validateLengthOver(value, 2);
};

const usePassword = (initialValue: string) => {
  const validLength = 2;
  const { value, onChange, onBlurValidLength, errorStatus } =
    useInput<PasswordError>(initialValue, passwordValidates, validLength);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    onBlurValidLength(e);
  };

  return {
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    errorMessage: errorStatus && PasswordErrorMessages[errorStatus],
  };
};

export default usePassword;
