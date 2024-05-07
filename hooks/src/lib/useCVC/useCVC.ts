import { ChangeEvent, KeyboardEvent, FocusEvent, useState } from "react";
import { useInput } from "../common";
import Validator from "../utils/validator";
import { ERROR_MESSAGE, OPTION } from "../constants";

const useCVC = (initialValue: { cvc: string }) => {
  const { inputValue, handleInputChange, updateByNameAndValue } = useInput(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const handleCvcChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkNumberAndOver(value, OPTION.cvcMaxLength)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cvcOutOfRange,
      });
    }

    handleInputChange(e);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCvcValidator = (e: EventType) => {
    if (e.target !== e.currentTarget) return;

    const { name, value } = e.target;
    if (!Validator.checkFillNumber(value, OPTION.cvcMaxLength))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.cvcOutOfRange,
      });

    updateByNameAndValue({ name, value });
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCvcBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleCvcValidator(e);
  };

  const handleCvcEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    handleCvcValidator(e);
  };

  return {
    inputValue,
    validationResult,
    handleCvcChange,
    handleCvcBlur,
    handleCvcEnter,
  };
};

export default useCVC;
