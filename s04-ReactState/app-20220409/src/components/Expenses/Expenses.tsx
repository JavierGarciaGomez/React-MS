import React, { Fragment, useEffect, useState } from "react";

import { ExpenseItem } from "./ExpenseItem";
import "./Expenses.css";
import { Card } from "../UI/Card";
import { Expense } from "../../models/Expense";
import { ExpensesFilter } from "./ExpensesFilter";

interface Props {
  expenses: Expense[];
}

export const Expenses = ({ expenses }: Props) => {
  const [selectedYear, setSelectedYear] = useState("2020");
  const handleSelectFilter = (year: string) => {
    setSelectedYear(year);
  };

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter(
        (expense) => expense.date.getFullYear() === Number(selectedYear)
      )
    );
  }, [selectedYear]);

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelect={handleSelectFilter}
        selectedYear={selectedYear}
      />
      <Fragment>
        {filteredExpenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </Fragment>
    </Card>
  );
};
