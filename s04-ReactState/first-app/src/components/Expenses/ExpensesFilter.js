// 59 activity 2
import React from "react";

import "./ExpensesFilter.css";

export const ExpensesFilter = ({ filterHandler, selected }) => {
  const changeHandler = (e) => {
    console.log("changed", e.target.value);
    filterHandler(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={changeHandler} value={selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
