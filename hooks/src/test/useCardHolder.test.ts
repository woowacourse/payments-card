import { renderHook } from "@testing-library/react";
import React, { ChangeEvent } from "react";
import { ErrorStatus } from "@/types/errorStatus";
import { CardHolderErrorMessages } from "@/constants/error";
import { useCardHolder } from "@/lib";

describe("useCardHolder 훅 테스트", () => {
  const validValue = "HAILEY RIAN";
  const initialValue = "";
  const doubleSpaceInvalidValue = "HAILEY  RIAN";
  it("초기값이 정확히 설정되어야 한다.", () => {
    const { result } = renderHook(() => useCardHolder(validValue));

    expect(result.current.value).toBe(validValue);
  });

  it("입력값이 정확히 업데이트 되어야 한다.", () => {
    const { result } = renderHook(() => useCardHolder(validValue));
    const changeValue = "RIAN HAILEY";
    React.act(() => {
      result.current.onChange({
        target: { value: changeValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(changeValue);
  });

  it("영어 대문자가 아니면 에러를 낸다.", () => {
    const initialValue = "";
    const { result } = renderHook(() => useCardHolder(initialValue));
    const invalidValue = "hailey rian";

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage =
      CardHolderErrorMessages[ErrorStatus.ONLY_UPPERCASE];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it("빈칸이 두 개이면 에러를 낸다.", () => {
    const { result } = renderHook(() => useCardHolder(initialValue));

    React.act(() => {
      result.current.onChange({
        target: { value: doubleSpaceInvalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage =
      CardHolderErrorMessages[ErrorStatus.IS_DOUBLE_BLANK];

    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });
});
