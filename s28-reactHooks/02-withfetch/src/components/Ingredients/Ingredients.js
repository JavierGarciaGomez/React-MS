import React, { useCallback, useEffect, useState } from "react";

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

  useEffect(() => {
    // get the data
    fetch(
      "https://react-course-fh-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const loadedIngredients = [];
        for (const key in data) {
          loadedIngredients.push({
            id: key,
            title: data[key].title,
            amount: data[key].amount,
          });
        }
        setingredients(loadedIngredients);
      });
  }, []);

  useEffect(() => {}, [ingredients]);

  const filterIngredientsHandler = useCallback((filteredIngerdients) => {
    setingredients(filteredIngerdients);
  }, []);

  const addIngredient = async (ingredient) => {
    fetch(
      "https://react-course-fh-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setingredients((prevIngredients) => [
          ...prevIngredients,
          {
            id: data.name,
            ...ingredient,
          },
        ]);
      });
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
        <Search filterIngredients={filterIngredientsHandler} />
        <IngredientList
          ingredients={ingredients}
          removeIngredient={removeIngredient}
        />{" "}
      </section>{" "}
    </div>
  );
}

export default Ingredients;
