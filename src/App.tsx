import InputField from './components/InputField'
import './App.css'
import { useState } from 'react'
import type { Todo } from './model'
import TodoList from './components/TodoList'


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);


  return (
    <div className="App">
      <span className="heading">Taskly</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList />
    </div>
  )
}

export default App
