import React from "react";
import { Card } from "./Card";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  console.log("expenses", expenses);
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem {...expense} key={expense.id}></ExpenseItem>
      ))}
    </Card>
  );
};
