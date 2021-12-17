import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const { filterIngredients } = props;
  // 432
  const [enteredFilter, setenteredFilter] = useState("");

  useEffect(() => {
    const query =
      enteredFilter.length === 0
        ? ""
        : `?orderBy="title"&equalTo=${enteredFilter}`;
    fetch(
      "https://react-course-fh-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json" +
        query
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
        filterIngredients(loadedIngredients);
      });
  }, [enteredFilter, filterIngredients]);
  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            value={enteredFilter}
            onChange={(event) => setenteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
