import { useState } from "react";
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense";
import { initialExpenses } from "./data/expenses";

export const App = () => {
  const [expenses, setexpenses] = useState(initialExpenses);
  const [filteredYear, setfilteredYear] = useState("2020");
  const [showForm, setshowForm] = useState(false);

  const addExpense = (expense) => {
    console.log("add expense");
    setexpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filterData = (value) => {
    console.log("ss", value);
    setfilteredYear(value);
  };

  const showFormHandler = () => {
    setshowForm((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div>
      <NewExpense
        addExpense={addExpense}
        showFormHandler={showFormHandler}
        showForm={showForm}
      />
      <Expenses
        expenses={expenses}
        filterHandler={filterData}
        selectedYear={filteredYear}
      />
    </div>
  );
};

export default App;
