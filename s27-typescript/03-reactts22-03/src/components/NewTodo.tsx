import React, { useContext, useRef } from "react";
import { Todo } from "../models/todo";

import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

export const NewTodo: React.FC = (props) => {
  const todosContext = useContext(TodosContext);
  const { addTodo } = todosContext;
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text" className={classes.label}>
        Todo text
      </label>
      <input
        type="text"
        id="text"
        ref={todoTextInputRef}
        className={classes.input}
      />
      <button className={classes.button}>Add Todo</button>
    </form>
  );
};
