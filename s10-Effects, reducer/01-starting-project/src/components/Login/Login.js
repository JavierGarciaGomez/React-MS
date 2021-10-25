// 111, 113, 114, 116
import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

// 116
const emailReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      console.log("USER-input", state);
      return { value: action.payload, isValid: action.payload.includes("@") };

    case "INPUT_BLUR":
      console.log("USER-blur", state);
      return { isValid: state.value.includes("@"), ...state };

    default:
      break;
  }
  return { value: "", isValid: false };
};

// 117
const passwordReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      console.log("USER-input", state);
      return {
        value: action.payload,
        isValid: action.payload.trim().length > 6,
      };

    case "INPUT_BLUR":
      console.log("USER-blur", state);
      return { isValid: state.value.trim().length > 6, ...state };

    default:
      break;
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // 116
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  // 117
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // 117
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // 111, 113
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("checking form validity");
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    // cleanup process
    return () => {
      console.log("CLEANUP");
      clearTimeout(timeout);
    };
  }, [emailIsValid, passwordIsValid]);

  // 116
  const emailChangeHandler = (event) => {
    // 116
    dispatchEmail({ type: "USER_INPUT", payload: event.target.value });
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    // setFormIsValid(
    //   event.target.value.includes("@") && enteredPassword.trim().length > 6
    // );
    // setFormIsValid(emailState.isValid && enteredPassword.trim().length > 6);
    dispatchPassword({ type: "USER_INPUT", payload: event.target.value });
  };

  // ..., 116
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
    // setEmailIsValid(enteredEmail.includes("@"));
    // setEmailIsValid(emailState.isValid);
  };

  // ..., 117
  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

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
