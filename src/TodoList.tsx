import React from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

/**
 * Renders a list of todos.
 *
 * @component
 * @param {TodoListProps} props - The component props.
 * @param {Todo[]} props.todos - The array of todos to render.
 * @param {Function} props.toggleTodo - The function to toggle a todo's completion status.
 * @param {Function} props.deleteTodo - The function to delete a todo.
 * @returns {JSX.Element} The rendered TodoList component.
 */
const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                >
                    <span
                        onClick={() => toggleTodo(todo.id)}
                        className={todo.completed ? 'completed' : ''}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;