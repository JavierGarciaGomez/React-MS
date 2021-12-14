// 410

import React, { FC, useContext, useRef } from "react";
import { TodosContext } from "../store/TodosContext";

// const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {
const NewTodo: FC = (props) => {
  const todosContext = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const input = inputRef.current!.value;

    todosContext.addTodo(input);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <label>Todo Text</label>
      <input type="text" ref={inputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
