// ..., 58
import React, { useState } from "react";
import { Expenses } from "./components/Expenses/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";

import { initialExpenses } from "./data/initialExpenses";

export const App = () => {
  const [expenses, setexpenses] = useState(initialExpenses);

  const addExpenseHandler = (newExpense) => {
    // setexpenses([...expenses, newExpense]);
    setexpenses((previousExpenses) => [newExpense, ...previousExpenses]);
    console.log("new expenses", expenses);
  };
  return (
    <div>
      <NewExpense addExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
