// 90

import React, { useState } from "react";
import { Button } from "../UI/Button";
import { Card } from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

export const AddUser = ({ addUser }) => {
  const [inputValues, setinputValues] = useState({ username: "", age: "" });
  const [error, seterror] = useState();

  const changeHandler = (e) => {
    seterror();
    setinputValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const user = inputValues;
    // validation logic
    const { age, username } = inputValues;

    if (username.trim().length === 0 || age.trim().length === 0) {
      seterror({ title: "bad", message: "something is wrong" });
      return;
    }
    user.id = Math.random().toString();
    addUser(user);
    setinputValues({ username: "", age: "" });
  };

  const errorHandler = () => {
    seterror(null);
  };

  return (
    <div>
      {error ? (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      ) : null}

      <Card>
        <form className="input">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={inputValues.username}
            onChange={changeHandler}
            name="username"
          ></input>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={inputValues.age}
            onChange={changeHandler}
            name="age"
          ></input>
          <Button className="button" type="submit" clickHandler={submitHandler}>
            Add new user
          </Button>
        </form>
      </Card>
    </div>
  );
};
