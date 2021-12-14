// 408, 409
import React, { FC, useContext } from "react";
import Todo from "../models/Todo";
import { TodosContext } from "../store/TodosContext";
import TodoItem from "./TodoItem";

// const Todos: FC<{ items: Todo[]; removeTodo: (id: string) => void }> = (
const Todos: FC = (props) => {
  const todosContext = useContext(TodosContext);
  //   const { items }: { items: Todo[] } = props;
  const items = todosContext.items;
  console.log("items", items);
  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
