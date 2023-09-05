import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../JS/Actions/actions';

const Task = ({ todo }) => {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(todo.description);

    const handleEditClick = () => {
        setEditing(true);
        };
    
        const handleSaveClick = () => {
        dispatch({
            type: 'EDIT_TODO',
            payload: {
            id: todo.id,
            description: editedDescription,
            },
        });
        setEditing(false);
        };
    
        return (
        <tr>
            <td>
            {editing ? (
                <input
                type="text"
                className="form-control"
                value={editedDescription}
                onChange={(e) => setEditedDescription(e.target.value)}
                />
            ) : (
                <span
                onClick={() => dispatch(toggleTodo(todo.id))}
                style={{
                    textDecoration: todo.isDone ? 'line-through' : 'none',
                }}
                >
                {todo.description}
                </span>
            )}
            </td>
            <td>
            {editing ? (
                <button
                className="btn btn-success btn-sm"
                onClick={handleSaveClick}
                >
                Enregistrer
                </button>
            ) : (
                <button
                className="btn btn-warning btn-sm mx-2"
                onClick={handleEditClick}
                >
                Modifier
                </button>
            )}
            <button
                className="btn btn-danger btn-sm mx-2"
                onClick={() => dispatch(deleteTodo(todo.id))}
            >
                Supprimer
            </button>
            </td>
        </tr>
    );
};

export default Task;