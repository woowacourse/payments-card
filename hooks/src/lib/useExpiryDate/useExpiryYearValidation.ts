import { useState } from "react";

import cardInputValidator from "../validators/cardInputValidator";

import { INPUT_RULES, VALIDATION_MESSAGES } from "../constants/cardCustomHook";

const useExpiryYearValidation = () => {
  const [errorState, setErrorState] = useState(false);

  const [errorText, setErrorText] = useState("");

  const validateExpiryYear = (value: string): boolean => {
    const isNumericInput = cardInputValidator.validateNumericInput(value);

    if (!isNumericInput) {
      setErrorText(VALIDATION_MESSAGES.onlyNumbersAllowed);
      setErrorState(true);

      return false;
    }

    const isOverInputLength = value.length > INPUT_RULES.validExpiryDateLength;

    if (isOverInputLength) return false;

    if (!cardInputValidator.validateYear(value)) {
      setErrorText(VALIDATION_MESSAGES.expiredYear);
      setErrorState(true);

      return true;
    }

    setErrorText("");
    setErrorState(false);

    return true;
  };

  return {
    errorState,
    setErrorState,
    errorText,
    validateExpiryYear,
  };
};

export default useExpiryYearValidation;