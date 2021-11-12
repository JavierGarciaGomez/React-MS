// 51, 58, activity 3
import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ addExpense, showForm, showFormHandler }) => {
  // 58
  // const saveExpenseDataHandler = (enteredExpenseData) => {
  //   const expenseData = { ...enteredExpenseData, id: new Date() };
  //   console.log("from parent", expenseData);
  //   addExpenseHandler(expenseData);
  //   showFormHandler();
  // };
  // activity 3
  // const [showForm, setShowForm] = useState(false);
  // const showFormHandler = () => {
  //   setShowForm((previousValue) => !previousValue);
  //   console.log("show form", showForm);
  // };
  // return (
  //   <div className="new-expense">
  //     {showForm ? (
  //       <ExpenseForm
  //         onSaveExpenseData={(saveExpenseDataHandler, showFormHandler)}
  //       />
  //     ) : (
  //       <button onClick={showFormHandler}>Add New Expense</button>
  //     )}
  //   </div>
  // );

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          addExpense={addExpense}
          showFormHandler={showFormHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};
