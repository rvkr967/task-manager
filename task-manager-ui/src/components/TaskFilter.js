import React from 'react';

const TaskFilter = ({ onChange }) => {
    return (
        <div className="container-fluid">
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="filterSelect">Filter</label>
                <select className="form-select" id="filterSelect" onChange={(e) => onChange(e.target.value)}>
                    <option value="all">All</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
            </div>
        </div>
    );
};

export default TaskFilter;
