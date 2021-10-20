// 74, 77, 80
import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import "./CourseInput.css";
// import styled from "styled-components";

// 80
import styles from "./CourseInput.module.css";

// const div = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   /* 75 */
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // 74
  const [isValid, setisValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // 74
    if (event.target.value.trim().length > 0) {
      setisValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // 74
    if (enteredValue.trim().length === 0) {
      setisValid(false);
      return;
    }
    setisValid(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        {/* 74 */}
        {/* <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label> */}
        <label>Course Goal</label>
        {/* 74 */}
        {/* <input
          style={{
            background: !isValid ? "salmon" : "white",
            borderColor: !isValid ? "red" : "black",
          }}
          type="text"
          onChange={goalInputChangeHandler}
        /> */}
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
