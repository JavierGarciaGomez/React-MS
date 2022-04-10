import React, { Fragment, useState } from "react";
import "./App.css";

import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { expenses as initialExpenses } from "./data/expenses";
import { Expense } from "./models/Expense";

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const handleAddExpense = (expense: Expense) => {
    console.log(expense);
    setExpenses((prev) => expenses.concat(expense));
    expenses.push(expense);
  };

  return (
    <Fragment>
      <NewExpense onSubmit={handleAddExpense} />

      <Expenses expenses={expenses} />
    </Fragment>
  );
}

export default App;
