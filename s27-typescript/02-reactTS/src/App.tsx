import React, { useState } from "react";

import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/Todo";
import { TodosContextProvider } from "./store/TodosContext";

const initialTodos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

function App() {
  // const [todos, settodos] = useState<Todo[]>(initialTodos);

  // const addTodo = (todoText: string) => {
  //   const newTodo = new Todo(todoText);
  //   settodos((prevTodos) => {
  //     return prevTodos.concat(newTodo);
  //   });
  // };

  // const removeTodo = (id: string) => {
  //   settodos((prevTodos) => {
  //     return prevTodos.filter((todo) => todo.id !== id);
  //   });
  //   return {};
  // };

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
