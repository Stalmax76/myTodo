import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodoHandler = (text: string): void => {
    setTodos([...todos, text]);
  };
  const deleteTodoHandler = (index: number): void => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };
  return (
    <div className="app">
      <h1>todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
