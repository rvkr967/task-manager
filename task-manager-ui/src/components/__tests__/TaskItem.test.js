import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskItem from './TaskItem';

describe('TaskItem Component', () => {
    const task = {
        id: 1,
        title: 'Test Task',
        description: 'Test Description',
        status: 'To Do'
    };

    test('renders TaskItem component with task details', () => {
        render(<TaskItem task={task} />);
        expect(screen.getByText('Test Task')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
        expect(screen.getByText('To Do')).toBeInTheDocument();
    });

    test('calls onUpdateStatus function when "Update Status" button is clicked', () => {
        const handleUpdateStatus = jest.fn();
        render(<TaskItem task={task} onUpdateStatus={handleUpdateStatus} />);
        fireEvent.click(screen.getByText('Update Status'));
        expect(handleUpdateStatus).toHaveBeenCalled();
        expect(handleUpdateStatus).toHaveBeenCalledWith(1);
    });

    test('calls onDelete function when "Delete" button is clicked', () => {
        const handleDelete = jest.fn();
        render(<TaskItem task={task} onDelete={handleDelete} />);
        fireEvent.click(screen.getByText('Delete'));
        expect(handleDelete).toHaveBeenCalled();
        expect(handleDelete).toHaveBeenCalledWith(1);
    });

    test('displays correct badge color based on task status', () => {
        render(<TaskItem task={task} />);
        const badge = screen.getByText('To Do').closest('.badge');
        expect(badge).toHaveClass('bg-primary');
    });

});
