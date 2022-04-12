import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useReducer,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

interface Props {
  onLogin: (email: string, password: string) => void;
}

const initialInputState = {
  value: "",
  isValid: false,
};

type ActionType =
  | { type: "USER_INPUT"; payload: string }
  | { type: "INPUT_BLUR" };

const emailReducer = (state: typeof initialInputState, action: ActionType) => {
  switch (action.type) {
    case "USER_INPUT":
      return { value: action.payload, isValid: state.value.includes("@") };

    case "INPUT_BLUR":
      return { ...state, isValid: state.value.includes("@") };
    default:
      return state;
  }
};

const passwordReducer = (
  state: typeof initialInputState,
  action: ActionType
) => {
  switch (action.type) {
    case "USER_INPUT":
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };

    case "INPUT_BLUR":
      return { ...state, isValid: state.value.trim().length > 6 };
    default:
      return state;
  }
};

const Login = (props: Props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState(true);
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [formIsValid, setFormIsValid] = useState(false);

  // useEffect(() => {
  //   const timerIdentifier = setTimeout(() => {
  //     console.log("checking form validity");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timerIdentifier);
  //     console.log("clean up");
  //   };
  // }, [enteredEmail, enteredPassword]);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    initialInputState
  );

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialInputState
  );

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    props.onLogin(emailState.value, passwordState.value);
  };

  console.log("emailstate", emailState);

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
