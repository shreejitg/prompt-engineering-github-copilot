// /d:/Projects/React/todo-app/src/App.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders Todo List heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Todo List/i);
  expect(headingElement).toBeInTheDocument();
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