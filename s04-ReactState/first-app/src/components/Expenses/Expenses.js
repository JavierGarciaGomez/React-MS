import React, { useState } from "react";
import { Card } from "../UI/Card";

import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { ExpensesFilter } from "./ExpensesFilter";

export const Expenses = ({ expenses }) => {
  const [filter, setfilter] = useState("2022");

  const filterHandler = (year) => {
    setfilter(year);
    console.log("filter", filter);
  };

  return (
    <div>
      <ExpensesFilter filterHandler={filterHandler} selected={filter} />
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem {...expense} key={expense.id}></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};
