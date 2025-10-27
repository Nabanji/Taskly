import "./styles.css";
import  type { Todo } from "../model";

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      <li>Go to the shop</li>
        {/* {todos.map((todo) => (
            <li>{todo.todo}</li>
        ))} */}
    </div>
  )
}

export default TodoList