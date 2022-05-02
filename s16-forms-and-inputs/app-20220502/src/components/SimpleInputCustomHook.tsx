import { useInput } from "../hooks/useInput";
import { FormEvent } from "react";

export const SimpleInputCustomHook = () => {
  // const nameInputRef = useRef<HTMLInputElement>(null!);

  const validateName = (value: string) => {
    return value.trim() !== "";
  };

  const validateEmail = (value: string) => {
    return value.includes("@");
  };

  const {
    value: enteredName,
    valueChangeHandler: handleNameChange,
    inputBlurHandler: handleNameBlur,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    reset: resetNameInput,
  } = useInput(validateName);

  const {
    value: enteredEmail,
    valueChangeHandler: handleEmailChange,
    inputBlurHandler: handleEmailBlur,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    reset: resetEmailInput,
  } = useInput(validateEmail);

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissionHandler = (e: FormEvent) => {
    e.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) return;
    resetNameInput();
    resetEmailInput();
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }
    console.log(enteredName, enteredEmail);
    // const enteredValue = nameInputRef.current;
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          value={enteredName}
          onBlur={handleNameBlur}
          // ref={nameInputRef}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={handleEmailChange}
          value={enteredEmail}
          onBlur={handleEmailBlur}
          // ref={nameInputRef}
        />
        {emailInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
