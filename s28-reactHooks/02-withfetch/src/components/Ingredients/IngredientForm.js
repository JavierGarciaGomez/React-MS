// ..., 423
import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  // 423
  const [inputState, setinputState] = useState({
    title: "",
    amount: "",
  });

  const submitHandler = (event) => {
    event.preventDefault();
    props.addIngredient(inputState);
    // ...
  };

  const changeHandler = (event) => {
    const target = event.target;

    // setinputState((prevInputState) => ({
    //   title: newValue,
    //   amount: prevInputState.amount,
    // }));

    setinputState((prevInputState) => {
      prevInputState[target.name] = target.value;

      return { ...prevInputState };
    });
  };

  console.log("state tit", inputState);

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={changeHandler}
              name="title"
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={changeHandler}
              name="amount"
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
