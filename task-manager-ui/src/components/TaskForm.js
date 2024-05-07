// TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';
import config from '../config';

const TaskForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('To Do');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return; // Don't submit if title is empty
        axios.post(`${config.apiUrl}/tasks`, { title, description, status })
            .then(response => {
                console.log('Task created:', response.data);
                onSubmit(); // Trigger parent callback to refresh task list
                setTitle('');
                setDescription('');
                setStatus('To Do');
            })
            .catch(error => {
                console.error('Error creating task:', error);
            });
    };

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </div>
                    <div className="col">
                        <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)} required>
                            <option value="To Do">To Do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary">Add Task</button>
                    </div>
                </div>
                <textarea className="form-control mt-3" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </form>
        </div>
    );
};

export default TaskForm;
