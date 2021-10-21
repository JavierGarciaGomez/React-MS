// 89, 90, 91, 92, 93, 97
import React from "react";
import { Card } from "../../UI/Card";
import styles from "../../index.module.css";
import { Button } from "../../UI/Button";
import { useState } from "react";
import { ErrorModal } from "../../UI/ErrorModal";

export const AddUser = ({ onAddUser }) => {
  // 92
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");

  //   97
  const [error, seterror] = useState();

  const changeAgeHandler = (e) => {
    const age = e.target.value;
    setEnteredAge(age);
  };

  const changeUserNameHandler = (e) => {
    const username = e.target.value;
    setEnteredUsername(username);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length < 1) {
      seterror({
        title: "invalid input",
        message: "please enter a valid username",
      });
      console.log("error, too few letters");
      return;
    }
    if (enteredAge <= 0) {
      seterror({
        title: "invalid input",
        message: "please enter a valid age",
      });

      return;
    }
    console.log("age", enteredAge, "username", enteredUsername);

    const id = new Date();

    onAddUser({ name: enteredUsername, age: enteredAge, id });

    setEnteredAge("");
    setEnteredUsername("");
  };

  const addUserHandler = (e) => {
    e.preventDefault();
  };

  const errorHandler = () => {
    seterror(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorHandler={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={changeUserNameHandler}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={changeAgeHandler}
            value={enteredAge}
          ></input>
          {/* 91 */}
          <Button type="submit" onClick={submitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};
