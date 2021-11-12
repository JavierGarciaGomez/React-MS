// 67
import React from "react";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

export const ExpensesList = ({ filteredExpenses }) => {
  //   66;
  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses found</h2>;
  }

  return (
    <ul>
      {filteredExpenses.map((expense) => (
        <ExpenseItem expense={expense} key={expense.id}></ExpenseItem>
      ))}
    </ul>
  );
};
