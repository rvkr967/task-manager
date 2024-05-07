import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskList from './TaskList';

describe('TaskList Component', () => {
    test('renders TaskList component with no tasks', () => {
        const tasks = [];
        render(<TaskList tasks={tasks} />);
        expect(screen.queryByText('No tasks available')).toBeInTheDocument();
    });

    test('renders TaskList component with tasks', () => {
        const tasks = [
            { id: 1, title: 'Task 1', description: 'Description 1', status: 'To Do' },
            { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress' },
            { id: 3, title: 'Task 3', description: 'Description 3', status: 'Done' }
        ];
        render(<TaskList tasks={tasks} />);
        expect(screen.getByText('Task 1')).toBeInTheDocument();
        expect(screen.getByText('Task 2')).toBeInTheDocument();
        expect(screen.getByText('Task 3')).toBeInTheDocument();
    });
});
