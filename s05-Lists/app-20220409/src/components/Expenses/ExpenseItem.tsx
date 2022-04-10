import "./ExpenseItem.css";
import React, { useState } from "react";
import { Expense } from "../../models/Expense";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";

interface Props {
  expense: Expense;
}

export const ExpenseItem = ({ expense }: Props) => {
  const { id, title, amount, date } = expense;
  const [newTitle, setNewTitle] = useState(title);

  const handleClick = () => {
    setNewTitle("Title changed");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <li className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">{`$${amount}`}</div>
      </li>
      <button onClick={handleClick}>Change Title</button>
    </Card>
  );
};
