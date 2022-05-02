import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ForwardCounter from "./components/ForwardCounter";
import BackwardCounter from "./components/BackwardCounter";
import { SecondExample } from "./components/SecondExample";

function App() {
  return (
    <React.Fragment>
      <h3>188 Creating a custom react hook function</h3>
      <ForwardCounter />
      <BackwardCounter />
      <h3>191. More realistic example</h3>
      <SecondExample />
    </React.Fragment>
  );
}

export default App;
