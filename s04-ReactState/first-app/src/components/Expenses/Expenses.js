// ..., 63, 66, 70
import React, { useState } from "react";
import { Card } from "../UI/Card";

import "./Expenses.css";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterHandler = (year) => {
    setFilteredYear(year);
    console.log("year", year);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filterHandler={filterHandler} selected={filteredYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
        {/* 66 */}
        {/* {filteredExpenses.length === 0 && <p> No expenses found</p>}
      {filteredExpenses.length > 0 && ( */}
      </Card>
    </div>
  );
};
