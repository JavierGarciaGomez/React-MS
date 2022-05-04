import React, { useContext } from "react";
import { Meal } from "../../../interfaces/Interfaces";
import CartContext from "../../../store/CartContext";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

type Props = {
  meal: Meal;
};
export const MealItem = ({ meal }: Props) => {
  const { addItem } = useContext(CartContext);

  const { description, id, name, price } = meal;
  const formattedPrice = `$${price.toFixed(2)}`;
  const addToCardHandler = (amount: number) => {
    addItem({ ...meal, amount });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCardHandler} />
      </div>
    </li>
  );
};
