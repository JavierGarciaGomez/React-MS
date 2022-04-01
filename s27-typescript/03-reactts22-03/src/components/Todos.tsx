import React, { Fragment } from "react";
import { Todo } from "../models/todo";
import { NewTodo } from "./NewTodo";
import { TodoItem } from "./TodoItem";

export const Todos: React.FC<{ items: Todo[] }> = (props) => {
  const { items } = props;
  return (
    <Fragment>
      <ul>
        {items.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </ul>
    </Fragment>
  );
};
