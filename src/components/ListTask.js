import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const todos = useSelector((state) => state.todos);
    const [filter, setFilter] = useState('all');

    // Filtrer les tâches en fonction de l'état (done/not)
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'all') {
        return true;
        } else if (filter === 'done') {
        return todo.isDone;
        } else {
        return !todo.isDone;
        }
    });

    return (
        <div className="mt-3">
        <div className="btn-group mx-3 mt-3" role="group">
            <button
            style={{ width: '150px' }}
            type="button"
            className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            >
            Toutes
            </button>
            <button
            style={{ width: '150px' }}
            type="button"
            className={`btn btn-outline-success ${filter === 'done' ? 'active' : ''}`}
            onClick={() => setFilter('done')}
            >
            Terminées
            </button>
            <button
            style={{ width: '150px' }}
            type="button"
            className={`btn btn-outline-danger ${filter === 'not' ? 'active' : ''}`}
            onClick={() => setFilter('not')}
            >
            Non terminées
            </button>
        </div>
        <div className="table-bordered rounded p-3 mt-3" style={{ width: '90%' }}>
            <table className="table">
            <thead>
                <tr>
                <th style={{ width: '75%' }}>Description</th>
                <th style={{ width: '25%' }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredTodos.map((todo) => (
                <Task key={todo.id} todo={todo} />
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
};

export default ListTask;
