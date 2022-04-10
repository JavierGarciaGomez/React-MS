import React, { useState } from "react";
import { Expense } from "../../models/Expense";
import { ExpenseForm } from "./ExpenseForm";
import "./newExpense.css";

interface Props {
  onSubmit: (expense: Expense) => void;
}
export const NewExpense = ({ onSubmit }: Props) => {
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onSubmit={onSubmit} onCancel={handleShowForm} />
      ) : (
        <button onClick={handleShowForm}>Add New Expense</button>
      )}
    </div>
  );
};
