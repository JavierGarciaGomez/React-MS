import "./ExpenseItem.css";
import React from "react";

import { Expense } from "../models/Expense";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";

interface Props {
  expense: Expense;
}

export const ExpenseItem = ({ expense }: Props) => {
  const { id, title, amount, date } = expense;

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{`$${amount}`}</div>
      </div>
    </Card>
  );
};
