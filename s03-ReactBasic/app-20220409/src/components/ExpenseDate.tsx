import React from "react";
import "./ExpenseDate.css";

interface Props {
  date: Date;
}

export const ExpenseDate = ({ date }: Props) => {
  const month = date.toLocaleString("es-ES", { month: "long" });
  const day = date.toLocaleString("es-ES", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
