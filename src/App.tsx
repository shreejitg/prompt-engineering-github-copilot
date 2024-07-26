import React, { useState } from 'react';
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  /**
   * Adds a new todo to the list of todos.
   * @param {string} text - The text of the todo.
   */
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  /**
   * Toggles the completion status of a todo item.
   * @param id - The ID of the todo item to toggle.
   */
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;