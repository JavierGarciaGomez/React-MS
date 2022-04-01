import React, { Fragment, useContext } from "react";
import { TodoItem } from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

export const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);
  const { items, removeTodo } = todosContext;
  return (
    <Fragment>
      <ul className={classes.todos}>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onRemove={removeTodo.bind(null, item.id)}
          />
        ))}
      </ul>
    </Fragment>
  );
};
