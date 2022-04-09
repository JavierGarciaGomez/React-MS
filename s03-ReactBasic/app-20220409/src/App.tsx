import React, { Fragment } from "react";
import "./App.css";
import { expenses } from "./data/expenses";
import { Expenses } from "./components/Expenses";

function App() {
  return (
    <Fragment>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </Fragment>
  );
}

export default App;
