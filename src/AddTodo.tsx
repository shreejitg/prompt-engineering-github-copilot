import React, { useState } from 'react';

type AddTodoProps = {
  addTodo: (text: string) => void;
};

/**
 * Component for adding a new todo.
 * @param {Object} props - The component props.
 * @param {Function} props.addTodo - The function to add a new todo.
 * @returns {JSX.Element} The AddTodo component.
 */
const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    /**
     * Handles the form submission.
     * @param {React.FormEvent} e - The form event.
     */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;