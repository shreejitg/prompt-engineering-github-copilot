// FILEPATH: /d:/Projects/React/todo-app/src/App.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Add Todo button', () => {
    render(<App />);
    const addButton = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'button' && /add todo/i.test(content);
    });
    expect(addButton).toBeInTheDocument();
  });

test('can add a new todo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add Todo/i);

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const todoItem = screen.getByText(/New Todo/i);
  expect(todoItem).toBeInTheDocument();
});

test('can toggle a todo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add Todo/i);

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const todoItem = screen.getByText(/New Todo/i);
  fireEvent.click(todoItem);

  expect(todoItem).toHaveClass('completed');
});

test('can delete a todo', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'button' && /add todo/i.test(content);
  });

  fireEvent.change(inputElement, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  const todoItem = screen.queryByText(/New Todo/i);
  expect(todoItem).not.toBeInTheDocument();
});