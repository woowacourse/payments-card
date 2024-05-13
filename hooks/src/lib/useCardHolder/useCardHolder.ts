import { ChangeEvent, useState, FocusEvent } from "react";
import Validator from "../utils/validator";
import { ERROR_MESSAGE } from "../constants";
import useInput from "../common/useInput";

const useCardHolder = (initialValue: string) => {
  const { inputValue, handleInputChange } = useInput(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: "",
  });

  const handleCardHolderChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkEnglish(value)) {
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.onlyEnglish,
      });
    }

    handleInputChange(e);
    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  const handleCardHolderBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;

    const { value } = e.target;
    if (!Validator.checkExist(value))
      return setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.nameOutOfRange,
      });

    setValidationResult({
      isValid: true,
      errorMessage: "",
    });
  };

  return {
    inputValue,
    validationResult,
    handleCardHolderChange,
    handleCardHolderBlur,
  } as const;
};

export default useCardHolder;
