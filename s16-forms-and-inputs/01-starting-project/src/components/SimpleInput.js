import { useEffect, useRef, useState } from "react";
// 199, 200, 201, 202, 203
const SimpleInput = (props) => {
  // const nameInputRef = useRef();
  const [enteredName, setenteredName] = useState("");
  // const [enteredNameIsValid, setenteredNameIsValid] = useState(false);
  const [enteredNameTouched, setenteredNameTouched] = useState(false);
  // 205
  const [formIsValid, setformIsValid] = useState(false);

  // 204
  const enteredNameIsValid = enteredName.trim() !== "";
  // 202
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  // 205

  // 205
  useEffect(() => {
    if (enteredNameIsValid) {
      setformIsValid(true);
    } else {
      setformIsValid(false);
    }
  }, [enteredNameIsValid]);

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log("name input is valid");
  //   }
  // }, [enteredNameIsValid]);

  const nameInputChangeHandler = (e) => {
    setenteredName(e.target.value);
    // if (e.target.value.trim() !== "") {
    //   setenteredNameIsValid(true);
    //   return;
    // }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // 202
    setenteredNameTouched(true);

    // 200
    if (!enteredNameIsValid) {
      return;
    }
    // setenteredNameIsValid(true);
    // console.log(enteredName);

    // getting value from rev
    // const enteredValue = nameInputRef.current.value;
    // console.log("getting the value from useref", enteredValue);

    setenteredName("");
    setenteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  // 203
  const nameInputBlurHandler = (e) => {
    setenteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }
    // // 200
    // if (enteredName.trim() === "") {
    //   setenteredNameIsValid(false);
    //   return;
    // }
  };
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameInputChangeHandler}
          // ref={nameInputRef}
          // 203
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && <p>Entered name is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
