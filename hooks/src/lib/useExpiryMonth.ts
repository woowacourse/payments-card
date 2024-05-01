import useInput from './useInput';

const onChange = (value: string) => {
  const isNumber = !Number.isNaN(Number(value));

  if (!isNumber) {
    return { isValid: false, errorMessage: '숫자를 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

const onBlur = (value: string) => {
  const isValidLength = value.length === 0 || value.length === 2;
  const isValidMonth = Number(value) >= 1 && Number(value) <= 12;

  if (!isValidLength) {
    return { isValid: false, errorMessage: '월은 2자리로 입력해주세요' };
  }

  if (!isValidMonth) {
    return { isValid: false, errorMessage: '월은 01~12 사이의 수로 입력해주세요' };
  }

  return { isValid: true, errorMessage: '' };
};

interface Options {
  isAutoFocus?: boolean;
}

const useExpiryMonth = (options?: Options) => {
  const { value, setValue, handleBlur, errorInfo, setErrorInfo } = useInput('', {
    onChange,
    onBlur,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const validationResult = onChange(event.target.value);
    setErrorInfo(validationResult);
    if (!validationResult.isValid) return;
    setValue(event.target.value);

    if (event.target.value.length === event.target.maxLength) {
      const validationResult = onBlur(event.target.value);
      setErrorInfo(validationResult);
      if (!validationResult.isValid) return;
      if (options?.isAutoFocus) {
        const target = event.target.nextElementSibling;
        if (target instanceof HTMLInputElement) target.focus();
      }
    }
  };

  return { value, handleChange, handleBlur, errorInfo };
};

export default useExpiryMonth;
