import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import TodoList from '../../src/components/TodoList';
import '@testing-library/jest-dom';

jest.mock('axios');

const mockData: Todo[] = [
  { userId: 1, id: 1, title: 'Test Todo 1', completed: false },
  { userId: 1, id: 2, title: 'Test Todo 2', completed: true },
];

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

describe('TodoList component', () => {
  // beforeEach(() => {
  //   (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValueOnce({ data: mockData });
  // });

  // it('renders todos correctly', async () => {
  //   render(<TodoList />);
    
  //   // Wait for axios request to resolve and todos to be rendered
  //   await waitFor(() => {
  //     expect(screen.getByText('Test Todo 1')).toBeInTheDocument();
  //     expect(screen.getByText('Test Todo 2')).toBeInTheDocument();
  //   });
  // });

  it('increases count when + button is clicked', async () => {
    render(<TodoList />);
    const addButton = screen.getByText('+');
    userEvent.click(addButton);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decreases count when - button is clicked', async () => {
    render(<TodoList />);
    const decreaseButton = screen.getByText('-');
    userEvent.click(decreaseButton);
    expect(screen.getByText('-1')).toBeInTheDocument(); // assuming negative count is okay
  });
});