import { useState } from "react";
import { getInputStatus, useInput } from "./useInput";
import { ERROR_MESSAGE } from "../shared/errorMessages";
import validator from "../shared/utils/validator/validator";

const useInputOwnerName = () => {
  const { value, status, setValue, setStatus } = useInput("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    //  status 업데이트
    setStatus(getInputStatus(value, event.target.maxLength));

    // Default가 아닌 경우 : Error 검사
    if (status !== "default") {
      const [isValid, errorMessage] = validator.ownerName.isValidInput(value);

      // Error인 경우 : 에러 발생
      if (!isValid) {
        setStatus("error");
        setErrorMessage(errorMessage);
      }
    }

    // Error가 아닌 경우 : 값 업데이트
    setValue(value);
    setErrorMessage("");
  };

  const handleBlur = () => {
    // 미완성인 경우 : Error 상태로 판단
    if (status === "default") {
      setStatus("error");
      setErrorMessage(ERROR_MESSAGE.ownerName.isNotFulfilled);
    }

    // 완성한 경우 : Complete 상태로 판단
    else if (status === "pending") {
      setStatus("complete");
      setErrorMessage("");
    }
  };

  return [value, status, errorMessage, handleChange, handleBlur];
};

export default useInputOwnerName;
