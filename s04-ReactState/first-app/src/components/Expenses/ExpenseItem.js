// 32, 46, 47
import "./ExpenseItem.css";

import React, { useState } from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "../UI/Card";

export const ExpenseItem = ({ title, date, amount }) => {
  const [newTitle, setNewTitle] = useState(title);
  const clickHandler = () => {
    setNewTitle("changed Title");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
};
