import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/UI/Button/Demo/DemoOutput";

function App() {
  console.log("rendering App");
  const [showText, setshowText] = useState(false);
  const toggleText = (e) => {
    e.preventDefault();
    setshowText((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <button onClick={toggleText}>Click me!</button>
      {/* {showText && <p>This is new!</p>} */}
      {/* 154 */}
      <DemoOutput show={showText} />
    </div>
  );
}

export default App;
