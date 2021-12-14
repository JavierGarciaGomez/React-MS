// 416
import React, { createContext, FC, useState } from "react";
import Todo from "../models/Todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: FC = (props) => {
  const [todos, settodos] = useState<Todo[]>([]);

  const addTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    settodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodo = (id: string) => {
    settodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
    return {};
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};
