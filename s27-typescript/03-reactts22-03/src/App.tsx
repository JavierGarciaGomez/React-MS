import React, { Fragment, useState } from "react";
import "./App.css";
import { Todos } from "./components/Todos";
import { Todo } from "./models/todo";
import { NewTodo } from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todo: string) => {
    setTodos((prev) => prev.concat(new Todo(todo)));
  };

  console.log(todos);
  return (
    <Fragment>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </Fragment>
  );
}

export default App;
