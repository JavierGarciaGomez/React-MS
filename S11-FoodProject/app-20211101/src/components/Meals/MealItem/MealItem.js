// 136, 145
import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ meal }) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: meal.id,
      amount,
      name: meal.name,
      price: meal.price,
    });
  };

  const price = `$${meal.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div>{meal.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
