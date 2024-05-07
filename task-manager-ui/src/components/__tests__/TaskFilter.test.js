import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskFilter from './TaskFilter';

describe('TaskFilter Component', () => {
    test('renders TaskFilter component', () => {
        render(<TaskFilter />);
        expect(screen.getByLabelText('Filter')).toBeInTheDocument();
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('To Do')).toBeInTheDocument();
        expect(screen.getByText('In Progress')).toBeInTheDocument();
        expect(screen.getByText('Done')).toBeInTheDocument();
    });

    test('calls onChange function with "To Do" when "To Do" filter is selected', () => {
        const handleChange = jest.fn();
        render(<TaskFilter onChange={handleChange} />);
        fireEvent.change(screen.getByLabelText('Filter'), { target: { value: 'To Do' } });
        expect(handleChange).toHaveBeenCalled();
        expect(handleChange).toHaveBeenCalledWith('To Do');
    });

    test('calls onChange function with "In Progress" when "In Progress" filter is selected', () => {
        const handleChange = jest.fn();
        render(<TaskFilter onChange={handleChange} />);
        fireEvent.change(screen.getByLabelText('Filter'), { target: { value: 'In Progress' } });
        expect(handleChange).toHaveBeenCalled();
        expect(handleChange).toHaveBeenCalledWith('In Progress');
    });

    test('calls onChange function with "Done" when "Done" filter is selected', () => {
        const handleChange = jest.fn();
        render(<TaskFilter onChange={handleChange} />);
        fireEvent.change(screen.getByLabelText('Filter'), { target: { value: 'Done' } });
        expect(handleChange).toHaveBeenCalled();
        expect(handleChange).toHaveBeenCalledWith('Done');
    });
});
