import React, { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setenteredValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);

  const hasError = !valueIsValid && isTouched;

  const inputChangeHandler = (e) => {
    console.log("aca");
    setenteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setisTouched(true);
  };

  const reset = () => {
    setenteredValue("");
  };

  console.log(enteredValue);

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
