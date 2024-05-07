import React from 'react';

const TaskItem = ({ task, onUpdateStatus, onDelete }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div style={{textAlign: 'left'}}>
                <h5>{task.title}</h5>
                <p>{task.description}</p>
            </div>
            <div>
                <span className={`badge bg-${getStatusColor(task.status)} me-2`}>{task.status}</span>
                <button className="btn btn-sm btn-info me-2" onClick={() => onUpdateStatus(task._id)}>Update Status</button>
                <button className="btn btn-sm btn-danger" onClick={() => onDelete(task._id)}>Delete</button>
            </div>
        </li>
    );
};

const getStatusColor = (status) => {
    switch (status) {
        case 'To Do':
            return 'primary';
        case 'In Progress':
            return 'warning';
        case 'Done':
            return 'success';
        default:
            return 'secondary';
    }
};

export default TaskItem;
