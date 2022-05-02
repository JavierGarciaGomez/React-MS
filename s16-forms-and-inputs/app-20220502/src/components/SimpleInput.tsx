import { ChangeEvent, FormEvent, useRef, useState } from "react";

const SimpleInput = () => {
  // const nameInputRef = useRef<HTMLInputElement>(null!);
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
  };

  const formSubmissionHandler = (e: FormEvent) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    console.log(enteredName);
    // const enteredValue = nameInputRef.current;
  };

  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={handleNameChange}
          value={enteredName}
          // ref={nameInputRef}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
