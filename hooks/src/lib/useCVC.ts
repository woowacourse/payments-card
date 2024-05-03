import useInput, { InputState } from "./domains/useInput";
import useValidation from "./domains/useValidation";
import { Validator } from "./domains/validation";
import { makeLengthValidator, numericOnlyValidator } from "./constants/validators";

const validators: Validator[] = [numericOnlyValidator, makeLengthValidator(3)];
const useCVC = () => {
  const CVC: InputState = useInput("");

  const { inputState, onChange, onBlur } = useValidation(CVC, validators);

  return { inputState, onChange, onBlur };
};

export default useCVC;
