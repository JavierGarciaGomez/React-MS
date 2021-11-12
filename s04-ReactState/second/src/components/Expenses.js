import React from "react";
import { Card } from "./Card";
import { Chart } from "./Chart/Chart";
import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { ExpensesChart } from "./ExpensesChart";
import { ExpensesFilter } from "./ExpensesFilter";
import { ExpensesList } from "./ExpensesList";

export const Expenses = ({ expenses, filterHandler, selectedYear }) => {
  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterHandler={filterHandler}
          selectedYear={selectedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
};
