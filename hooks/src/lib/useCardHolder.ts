import { useEffect } from 'react';
import useInput from './useInput';

const onChange = (value: string) => {
  const isEnglish = /^$|^[a-zA-Z ]+$/.test(value);

  if (!isEnglish) {
    return { isValid: false, errorMessage: '소유자명은 영어로만 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const onBlur = (value: string) => {
  const isValidHolderFormat = /^(?=\S)(?!.*\s\s).*\s+(?=\S).*$/.test(value);

  if (!isValidHolderFormat) {
    return {
      isValid: false,
      errorMessage: '소유자명은 양 끝의 공백이 포함되면 안 되고, 사이의 공백이 한 개 있어야합니다.',
    };
  }

  return { isValid: true, errorMessage: '' };
};

const useCardHolder = (initialValue: string) => {
  const { value, setValue, handleBlur, errorInfo, setErrorInfo } = useInput(
    initialValue.toUpperCase(),
    {
      onChange,
      onBlur,
    },
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = onChange(event.target.value);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value.toUpperCase());
  };

  useEffect(() => {
    if (!onChange(initialValue).isValid || !onBlur(initialValue).isValid) {
      console.error(
        `cardholder field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue('');
    }
  }, [initialValue, setValue]);

  return { value, handleChange, handleBlur, errorInfo };
};

export default useCardHolder;