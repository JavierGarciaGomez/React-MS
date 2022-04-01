import React from "react";
import { Todo } from "../models/todo";

import classes from "./TodoItem.module.css";

export const TodoItem: React.FC<{
  todo: Todo;
  onRemove: () => void;
}> = (props) => {
  const { todo, onRemove } = props;

  return (
    <li className={classes.item} onClick={onRemove}>
      {todo.text}
    </li>
  );
};
