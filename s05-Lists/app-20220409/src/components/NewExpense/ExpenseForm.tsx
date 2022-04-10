import React, { useState } from "react";
import { Expense } from "../../models/Expense";
import "./expenseForm.css";

interface Props {
  onSubmit: (expense: Expense) => void;
  onCancel: () => void;
}

export const ExpenseForm = ({ onSubmit, onCancel }: Props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: "title",
      title,
      date: new Date(date),
      amount: Number(amount),
    });
    setTitle("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id=""
            onChange={handleTitleChange}
            value={title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id=""
            onChange={handleAmountChange}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="title">Date</label>
          <input
            type="date"
            name="title"
            id=""
            onChange={handleDateChange}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};
