import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import config from './config';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = () => {
        axios.get(`${config.apiUrl}/tasks`)
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                console.error('Error fetching tasks:', error);
            });
    };

    const handleSubmit = (task) => {
      fetchTasks(); // Refresh tasks after creation
    };

    const handleUpdateStatus = (id) => {
        const taskToUpdate = tasks.find(task => task._id === id);
        const newStatus = getNextStatus(taskToUpdate.status);
        axios.patch(`${config.apiUrl}/tasks/${id}`, { status: newStatus })
            .then(response => {
                console.log('Task updated:', response.data);
                fetchTasks(); // Refresh tasks after update
            })
            .catch(error => {
                console.error('Error updating task:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`${config.apiUrl}/tasks/${id}`)
            .then(response => {
                console.log('Task deleted:', response.data);
                fetchTasks(); // Refresh tasks after deletion
            })
            .catch(error => {
                console.error('Error deleting task:', error);
            });
    };

    const getNextStatus = (currentStatus) => {
        const statusOrder = ['To Do', 'In Progress', 'Done'];
        const currentIndex = statusOrder.indexOf(currentStatus);
        return statusOrder[currentIndex < statusOrder.length - 1 ? currentIndex + 1 : 0];
    };

    const filteredTasks = tasks.filter(task => filter === 'all' || task.status === filter);

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskForm onSubmit={handleSubmit} />
            <TaskFilter onChange={setFilter} />
            <TaskList tasks={filteredTasks} onUpdateStatus={handleUpdateStatus} onDelete={handleDelete} />
        </div>
    );
}

export default App;
