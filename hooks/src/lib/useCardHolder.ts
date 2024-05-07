import useInput from "./common/useInput";
import { CardHolderErrorType } from "@/types/cardHolder";
import { checkDoubleBlank, validateUpperCase } from "@/validate/validate";
import { ChangeEvent } from "react";
import { CardHolderErrorMessages } from "@/constants/error";

export const cardHolderValidates = [
  (value: string) => validateUpperCase(value),
  (value: string) => checkDoubleBlank(value),
];

const useCardHolder = (initialValue: string) => {
  const { value, onChange, errorStatus } = useInput<CardHolderErrorType>({
    initialValue,
    validates: cardHolderValidates,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return {
    value,
    onChange: handleChange,
    errorMessage: errorStatus && CardHolderErrorMessages[errorStatus],
  };
};

export default useCardHolder;
