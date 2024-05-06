import { renderHook, act } from '@testing-library/react';
import useCardHolder from '../lib/useCardHolder';
import { ValidationResult } from './../lib/types';

describe('useCardHolder 커스텀 훅 테스트', () => {
  it('초기값이 정확히 설정되어야 한다.', () => {
    const initialValue = 'MARU COOKIE';
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.value).toBe(initialValue);
  });

  it('입력값이 정확히 업데이트 되어야 한다.', () => {
    const initialValue = 'MARU COOKIE';
    const userInput = 'CRON POBI';
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.runValidationInputTypeByChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe(userInput);
  });

  it('입력값이 숫자라면 field type 에러이다', () => {
    const initialValue = '';
    const userInput = '123';
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.runValidationInputTypeByChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
  });

  it('입력값이 한글이라면 field type 에러이다', () => {
    const initialValue = '';
    const userInput = '쿠키';
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.runValidationInputTypeByChange({
        target: { value: userInput },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
  });

  it('성과 이름 사이에 공백이 없으면 field rule 에러이다', () => {
    const initialValue = '';
    const userInput = 'COOKIEMARU';
    const { result } = renderHook(() => useCardHolder(initialValue));

    act(() => {
      result.current.runValidationFieldRulesByBlur({
        target: { value: userInput },
      } as React.FocusEvent<HTMLInputElement, Element>);
    });

    expect(result.current.validationResult.isValid).toBe(false);
  });

  it('initial value로 field type, field rule에 맞지 않는 초기값(숫자)을 넣을 때 input의 결과는 빈 값으로 셋팅된다.', () => {
    const initialValue = '123';
    const reset = '';
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.value).toBe(reset);
  });

  it('초기값이 소문자라면 대문자로 변환한다.', () => {
    const initialValue = 'maru cookie';
    const cardHolder = 'MARU COOKIE';
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.value).toBe(cardHolder);
  });

  it('커스텀 validate 함수를 줬을 때 (숫자만 허용) 초기값으로 123을 주면 초기화되지 않는다.', () => {
    const customValidateInputType = (value: string): ValidationResult => {
      const isNumber = !Number.isNaN(Number(value));
      if (!isNumber) {
        return { isValid: false, errorMessage: '숫자를 입력해주세요' };
      }
      return { isValid: true, errorMessage: '' };
    };

    const customValidateFieldRules = (value: string): ValidationResult => {
      console.log(value);
      return { isValid: true, errorMessage: '' };
    };

    const initialValue = '123';
    const { result } = renderHook(() =>
      useCardHolder(initialValue, { customValidateInputType, customValidateFieldRules }),
    );

    expect(result.current.value).toBe(initialValue);
  });

  it('초기값이 소문자라면 대문자로 변환한다.', () => {
    const initialValue = 'maru cookie';
    const cardHolder = 'MARU COOKIE';
    const { result } = renderHook(() => useCardHolder(initialValue));

    expect(result.current.value).toBe(cardHolder);
  });
});