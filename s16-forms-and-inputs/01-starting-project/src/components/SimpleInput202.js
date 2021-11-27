// 199

import { useEffect, useRef, useState } from "react";

const SimpleInput202 = (props) => {
  const [enteredName, setenteredName] = useState("");
  // 200
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // 202
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

  const nameInputChangeHandler = (e) => {
    setenteredName(e.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameIsTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameIsTouched(true);

    // validating after submit
    if (!enteredNameIsValid) {
      return;
    }

    setenteredName("");
    setEnteredNameIsTouched(false);
  };

  const nameInputClasses = !nameInputIsInvalid
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
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput202;
