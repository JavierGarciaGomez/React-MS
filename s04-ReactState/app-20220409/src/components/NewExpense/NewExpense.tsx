import React from "react";
import { Expense } from "../../models/Expense";
import { ExpenseForm } from "./ExpenseForm";
import "./newExpense.css";

interface Props {
  onSubmit: (expense: Expense) => void;
}
export const NewExpense = ({ onSubmit }: Props) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
};
