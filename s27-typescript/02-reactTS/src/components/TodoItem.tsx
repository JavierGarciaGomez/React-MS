import React, { FC } from "react";
import Todo from "../models/Todo";

const TodoItem: FC<{
  item: Todo;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className="item" key={props.item.id} onClick={props.onRemoveTodo}>
      {props.item.text}
    </li>
  );
};

export default TodoItem;
