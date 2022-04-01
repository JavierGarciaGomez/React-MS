import React from 'react'
import { Todo } from '../models/todo';

export const TodoItem: React.FC<{todo: Todo}> = (props) => {
const {todo} = props;
  return (
    <li>{todo.text}</li>
  )
}
