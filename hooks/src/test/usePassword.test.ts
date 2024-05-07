import { renderHook } from "@testing-library/react";
import React, { ChangeEvent } from "react";
import { ErrorStatus } from "@/types/errorStatus";
import { usePassword } from "@/lib";
import { PasswordErrorMessages } from "@/constants/error";

describe("usePassword 훅 테스트", () => {
  const validValue = "12";
  const initialValue = "";

  it("초기값이 정확히 설정되어야 한다.", () => {
    const { result } = renderHook(() => usePassword(validValue));

    expect(result.current.value).toBe(validValue);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const { result } = renderHook(() => usePassword(initialValue));
    React.act(() => {
      result.current.onChange({
        target: { value: validValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(validValue);
  });

  it("숫자가 아닌 값이 들어오면 에러를 낸다.", () => {
    const { result } = renderHook(() => usePassword(initialValue));
    const invalidValue = "ab";

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });
    const expectedErrorMessage =
      PasswordErrorMessages[ErrorStatus.IS_NOT_NUMBER];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it("길이가 2글자가 아니면 에러를 낸다.", () => {
    const { result } = renderHook(() => usePassword(initialValue));
    const invalidValue = "123";

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage =
      PasswordErrorMessages[ErrorStatus.INVALID_LENGTH];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });
});