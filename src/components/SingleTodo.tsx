import React from 'react'
import type { Todo } from '../model';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  return (
    <form>
      <span className="todos-single-text">
        {todo.todo}
      </span>
    </form>
  )
}

export default SingleTodo;