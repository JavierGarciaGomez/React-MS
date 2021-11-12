import "./ExpenseItem.css";
// 32
import React, { useState } from "react";
import { ExpenseDate } from "./ExpenseDate";
import { Card } from "./Card";

// export const ExpenseItem = ({ title, date, amount }) => {
export const ExpenseItem = ({ expense }) => {
  console.log(expense);
  const { title, date, amount } = expense;

  const [newTitle, setnewTitle] = useState(title);

  const clickHandler = (e) => {
    setnewTitle("title changed");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
    // </Card>
  );
};
