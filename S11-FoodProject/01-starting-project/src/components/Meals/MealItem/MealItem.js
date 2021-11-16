// 136
import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  const price = `$${meal.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div>{meal.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
