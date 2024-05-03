import { renderHook } from '@testing-library/react';
import useCVC from '../useCVC';
import React, { ChangeEvent, FocusEvent } from 'react';
import { ErrorStatus } from '../../types/errorStatus';
import { CVCErrorMessages } from '../../constants/error';

describe('useCVC 훅 테스트', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    expect(result.current.value).toEqual(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    const changeValue = '456';

    React.act(() => {
      result.current.onChange({
        target: { value: '456' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toEqual(changeValue);
  });

  it('숫자가 아닌 값이 들어오면 에러를 낸다.', () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    const invalidValue = 'ㄱㄴㄷ';

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = CVCErrorMessages[ErrorStatus.IS_NOT_NUMBER];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it('길이가 3글자 초과시 에러를 낸다.', () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    const invalidValue = '1234';

    React.act(() => {
      result.current.onChange({
        target: { value: invalidValue },
      } as ChangeEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = CVCErrorMessages[ErrorStatus.INVALID_LENGTH];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });

  it('길이가 3글자 미만시(Blur) 에러를 낸다.', () => {
    const initialValue = '123';
    const { result } = renderHook(() => useCVC(initialValue));
    const invalidValue = '12';

    React.act(() => {
      result.current.onBlur({
        target: { value: invalidValue },
      } as FocusEvent<HTMLInputElement>);
    });

    const expectedErrorMessage = CVCErrorMessages[ErrorStatus.INVALID_LENGTH];
    expect(result.current.errorMessage).toBe(expectedErrorMessage);
  });
});