import { ChangeEvent, FocusEvent, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

type InputState = typeof initialInputState;
type ActionType =
  | { type: "INPUT"; payload: string }
  | { type: "BLUR" }
  | { type: "RESET" };
type ValidateValue = (enteredValue: string) => boolean;

const inputStateReducer = (state: InputState, action: ActionType) => {
  if (action.type === "INPUT") {
    return { value: action.payload, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { isTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { isTouched: false, value: "" };
  }
  return state;
};

export const useInputWithReducer = (validateValue: ValidateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "INPUT", payload: event.target.value });
  };

  const inputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
