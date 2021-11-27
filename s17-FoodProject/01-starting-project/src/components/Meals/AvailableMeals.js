import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  // 215
  const [meals, setmeals] = useState([]);
  // 216
  const [isLoading, setisLoading] = useState(true);
  // 217
  const [httpError, sethttpError] = useState(null);
  // 215
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-course-fh-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );

      // 217
      if (!response) {
        console.log("voy a lanzar error");
        throw new Error("something went wrong");
      }
      const data = await response.json();
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      console.log(loadedMeals);
      setmeals(loadedMeals);
    };

    console.log("intentando");

    // 217
    fetchMeals().catch((error) => {
      console.log("error");
      setisLoading(false);
      sethttpError(error.message);
    });

    setisLoading(false);
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className="mealsLoading">
        <h2>The info is loading</h2>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className="mealsError">
        <h2>{httpError}</h2>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
