import { ChangeEvent, FocusEvent, FormEvent, useRef, useState } from "react";

export const SimpleInputTouched = () => {
  // const nameInputRef = useRef<HTMLInputElement>(null!);
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
    // if (enteredName.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
  };

  const handleNameBlur = (e: FocusEvent<HTMLInputElement>) => {
    setEnteredNameTouched(true);
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
  };

  const formSubmissionHandler = (e: FormEvent) => {
    e.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) return;
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }
    console.log(enteredName);
    // const enteredValue = nameInputRef.current;
  };

  const nameInputClasses = nameInputIsInvalid
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
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};
