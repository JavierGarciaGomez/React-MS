// 199

import { useEffect, useRef, useState } from "react";

const SimpleInput199 = (props) => {
  const [enteredName, setenteredName] = useState("");
  // 200
  const [enteredNameIsInvalid, setenteredNameIsInvalid] = useState(false);

  const nameInputChangeHandler = (e) => {
    setenteredName(e.target.value);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log("submitting");

    // validating after submit
    if (enteredName.trim().length === 0) {
      setenteredNameIsInvalid(true);
      return;
    }

    setenteredName("");
    setenteredNameIsInvalid(false);
  };

  console.log(
    "fullstate",
    "enteredName",
    enteredName,
    ". Invalid Input: ",
    enteredNameIsInvalid.toString()
  );

  const nameInputClasses = !enteredNameIsInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      {enteredNameIsInvalid && <p>Input vacío</p>}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput199;
