import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setingredients] = useState([
    {
      id: "1",
      title: "carrot",
      amount: "2",
    },
  ]);

  const addIngredient = (ingredient) => {
    setingredients((prevIngredients) => [
      ...prevIngredients,
      {
        id: Math.random().toString(),
        ...ingredient,
      },
    ]);
  };
  const removeIngredient = (id) => {
    setingredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => {
        return ingredient.id !== id;
      })
    );
  };
  return (
    <div className="App">
      <IngredientForm addIngredient={addIngredient} />
      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          removeIngredient={removeIngredient}
        />{" "}
      </section>{" "}
    </div>
  );
}

export default Ingredients;
