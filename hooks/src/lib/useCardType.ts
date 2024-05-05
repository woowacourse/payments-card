import useSelect from './useSelect';
import { useEffect } from 'react';

const onChange = (value: string, options: string[]) => {
  if (typeof value === 'undefined') {
    return { isValid: false, errorMessage: '카드사를 선택해주세요.' };
  }

  if (!options.includes(value)) {
    return { isValid: false, errorMessage: '올바르지 않은 선택입니다.' };
  }

  return { isValid: true, errorMessage: '' };
};

interface UseCardTypeProps {
  initialValue: string;
  options: string[];
  placeholder: string;
}

const useCardType = ({ initialValue, options, placeholder }: UseCardTypeProps) => {
  const { value, handleChange, setValue, errorInfo } = useSelect(
    initialValue,
    {
      onChange,
    },
    [placeholder, ...options],
  );

  useEffect(() => {
    if (!onChange(initialValue, [placeholder, ...options]).isValid) {
      console.error(
        `card type field error: ${initialValue} 라는 올바르지 않은 값이 들어와 빈 값으로 초기화했습니다.`,
      );
      setValue(placeholder);
    }
  }, [initialValue, setValue, options, placeholder]);

  return { value, handleChange, errorInfo };
};

export default useCardType;