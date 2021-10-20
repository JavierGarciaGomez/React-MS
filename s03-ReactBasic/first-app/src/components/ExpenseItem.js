import "./ExpenseItem.css";
// 32
import React from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";

export const ExpenseItem = ({ title, date, amount }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>

      <div className="expense-item__description">{title}</div>
      <div className="expense-item__price">{amount}</div>
    </Card>
  );
};
