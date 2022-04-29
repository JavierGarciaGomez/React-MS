import React, { useCallback, useMemo, useState } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import { DemoOutput } from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("APP, running");
  const [listTitle, setListTitle] = useState("My List");
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const handleToggleParagrah = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prev) => !prev);
    }
  }, [allowToggle]);

  const handleToggleToggle = useCallback(() => {
    setAllowToggle(true);
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>

      {showParagraph && <p>This paragraph is new</p>}
      <DemoOutput show={false} />
      <Button onClick={handleToggleToggle}>Allow Toggle</Button>
      <Button onClick={handleToggleParagrah}>Toggle</Button>
      <h2>Lesson 161 useMemo() </h2>
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
