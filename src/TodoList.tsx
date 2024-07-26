import React from 'react';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};

/**
 * Renders a list of todos.
 *
 * @component
 * @param {TodoListProps} props - The component props.
 * @param {Todo[]} props.todos - The array of todos to render.
 * @param {Function} props.toggleTodo - The function to toggle a todo's completion status.
 * @returns {JSX.Element} The rendered TodoList component.
 */
const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    onClick={() => toggleTodo(todo.id)}
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
    );
};

export default TodoList;