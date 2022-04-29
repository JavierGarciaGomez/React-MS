// 136, 145
import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, onAddToCart }) => {
  // 145
  const [amountIsValid, setamountIsValid] = useState(true);
  // 145 useref
  const amountInputRef = useRef();

  // ..., 145
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value;

    // validation
    if (enteredAmount === false || enteredAmount < 1 || enteredAmount > 5) {
      setamountIsValid(false);
      return;
    }
    setamountIsValid(true);
    onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        inputData={{
          label: "Amount",
          input: {
            id: "amount_" + id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          },
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
