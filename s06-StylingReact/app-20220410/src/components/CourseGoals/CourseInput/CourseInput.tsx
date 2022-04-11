import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
import styled from "styled-components";
import { Button2CSSModule } from "../../UI/Button/Button2CSSModule";

interface Props {
  onAddGoal: (enteredText: string) => void;
}

interface FormControlProps {
  readonly invalid: boolean;
}

const FormControl = styled.div<FormControlProps>`
   {
    margin: 0.5rem 0;
  }

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => {
      return props.invalid ? "red" : "black";
    }};
  }

  & input {
    display: block;
    width: 100%;

    border: 1px solid
      ${(props) => {
        return props.invalid ? "red" : "#ccc";
      }};

    font: inherit;
    background: ${(props) => (props.invalid ? "#ffd7d7" : "#transparent")};
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }
`;

const CourseInput = (props: Props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const goalInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (enteredValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`form-control ${isValid ? "" : "invalid"}`}> */}
      <FormControl invalid={!isValid}>
        {/* <label style={{ color: isValid ? "black" : "red" }}>Course Goal</label> */}
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          // style={{
          //   border: isValid ? "1px solid black" : "1px solid red",
          //   backgroundColor: isValid ? "transparent" : "salmon",
          // }}
        />
      </FormControl>

      {/* </div> */}
      <Button type="submit">Add Goal</Button>
      <Button2CSSModule type="submit">Add Goal CSS MOD</Button2CSSModule>
    </form>
  );
};

export default CourseInput;
