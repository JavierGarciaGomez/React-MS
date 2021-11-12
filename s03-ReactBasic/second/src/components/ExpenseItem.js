import "./ExpenseItem.css";
// 32
import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";

// export const ExpenseItem = ({ title, date, amount }) => {
export const ExpenseItem = ({ expense }) => {
  console.log(expense);
  const { title, date, amount } = expense;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button>change title</button>
    </Card>
    // </Card>
  );
};
