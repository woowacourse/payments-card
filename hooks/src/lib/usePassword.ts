import useInput from "./common/useInput";
import { validateLength, validateNumber } from "@/validate/validate";
import { ChangeEvent } from "react";
import { PasswordErrorType } from "@/types/password";
import { PasswordErrorMessages } from "@/constants/error";
import { VALID_LENGTH } from "@/constants/system";

const passwordValidates = (value: string) => {
  validateNumber(value);
  validateLength(value, VALID_LENGTH.PASSWORD);
};

const usePassword = (initialValue: string) => {
  const { value, onChange, errorStatus, onBlurValidLength } =
    useInput<PasswordErrorType>({
      initialValue,
      validate: passwordValidates,
      validLength: VALID_LENGTH.PASSWORD,
    });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return {
    value,
    onChange: handleChange,
    errorMessage: errorStatus && PasswordErrorMessages[errorStatus],
    onBlurValidLength,
  };
};

export default usePassword;
