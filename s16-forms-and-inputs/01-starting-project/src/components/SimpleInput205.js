// 199

import { useEffect, useRef, useState } from "react";

const SimpleInput205 = (props) => {
  const [enteredName, setenteredName] = useState("");
  // 200
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // 202
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
  // activity 5
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredEmailIsTouched, setenteredEmailIsTouched] = useState(false);

  // 205
  // const [formIsValid, setformIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  // activity 5
  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setformIsValid(true);
  //   } else {
  //     setformIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (e) => {
    setenteredName(e.target.value);
  };

  const emailInputChangeHandler = (e) => {
    setenteredEmail(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const emailInputBlurHandler = () => {
    setenteredEmailIsTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);
    setenteredEmailIsTouched(true);

    // validating after submit
    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    setenteredName("");
    setenteredEmail("");
    setEnteredNameIsTouched(false);
    setenteredEmailIsTouched(false);
  };

  const nameInputClasses = !nameInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  const emailInputClasses = !emailInputIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      {nameInputIsInvalid && <p>Input vacío</p>}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {emailInputIsInvalid && <p>Input vacío</p>}
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailInputChangeHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput205;
