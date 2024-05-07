import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from './TaskForm';

describe('TaskForm Component', () => {
    test('renders TaskForm component', () => {
        render(<TaskForm />);
        expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
        expect(screen.getByText('Add Task')).toBeInTheDocument();
    });

    test('submits a task when form is submitted', () => {
        const handleSubmit = jest.fn();
        render(<TaskForm onSubmit={handleSubmit} />);
        fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Test Task' } });
        fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Test Description' } });
        fireEvent.change(screen.getByLabelText('Select Status'), { target: { value: 'To Do' } });
        fireEvent.click(screen.getByText('Add Task'));
        expect(handleSubmit).toHaveBeenCalled();
        expect(handleSubmit).toHaveBeenCalledWith({ title: 'Test Task', description: 'Test Description', status: 'To Do' });
    });

    test('does not submit task if title is empty', () => {
        const handleSubmit = jest.fn();
        render(<TaskForm onSubmit={handleSubmit} />);
        fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Test Description' } });
        fireEvent.change(screen.getByLabelText('Select Status'), { target: { value: 'To Do' } });
        fireEvent.click(screen.getByText('Add Task'));
        expect(handleSubmit).not.toHaveBeenCalled();
    });

    test('clears input fields after submitting a task', () => {
        const handleSubmit = jest.fn();
        render(<TaskForm onSubmit={handleSubmit} />);
        fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Test Task' } });
        fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Test Description' } });
        fireEvent.change(screen.getByLabelText('Select Status'), { target: { value: 'To Do' } });
        fireEvent.click(screen.getByText('Add Task'));
        expect(screen.getByPlaceholderText('Title')).toHaveValue('');
        expect(screen.getByPlaceholderText('Description')).toHaveValue('');
        expect(screen.getByLabelText('Select Status')).toHaveValue('To Do');
    });
});
