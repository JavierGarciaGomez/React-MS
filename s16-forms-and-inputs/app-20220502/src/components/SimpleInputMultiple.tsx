import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";

export const SimpleInputMultiple = () => {
  // const nameInputRef = useRef<HTMLInputElement>(null!);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== "";
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(e.target.value);
    // if (enteredName.trim() !== "") {
    //   setEnteredNameIsValid(true);
    // }
  };
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(e.target.value);
  };

  const handleNameBlur = (e: FocusEvent<HTMLInputElement>) => {
    setEnteredNameTouched(true);
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    // }
  };
  const handleEmailBlur = (e: FocusEvent<HTMLInputElement>) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (e: FormEvent) => {
    e.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) return;
    // if (enteredName.trim() === "") {
    //   setEnteredNameIsValid(false);
    //   return;
    // }
    console.log(enteredName, enteredEmail);
    // const enteredValue = nameInputRef.current;
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
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
        {emailInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};
