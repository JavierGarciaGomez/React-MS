import React, { Fragment } from "react";
import { Expense } from "../models/Expense";
import { Card } from "./Card";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";

interface Props {
  expenses: Expense[];
}

export const Expenses = ({ expenses }: Props) => {
  return (
    <Card className="expenses">
      <Fragment>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Fragment>
    </Card>
  );
};
