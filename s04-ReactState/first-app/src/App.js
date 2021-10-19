// ..., 58
import React from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

import { expenses } from "./data/expenses";

export const App = () => {
  const addExpenseHandler = (newExpense) => {
    expenses.push(newExpense);
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
