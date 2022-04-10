import React, { Fragment } from "react";
import { Expense } from "../../models/Expense";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpensesList.css";

interface Props {
  filteredExpenses: Expense[];
}
export const ExpensesList = ({ filteredExpenses }: Props) => {
  if (filteredExpenses.length === 0)
    return <h2 className="expenses-list__fallback">No expenses found</h2>;

  return (
    <ul className="expenses-list">
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      ) : (
        <p>No expenses found</p>
      )}
    </ul>
  );
};
