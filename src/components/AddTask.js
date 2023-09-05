import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../JS/Actions/actions';
import { Form, Button } from 'react-bootstrap';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSubmit = () => {
        if (description.trim() === '') return;
        dispatch(addTodo(description));
        setDescription('');
    };

    return (
        <Form>
            <div className="d-flex">
                <Form.Group style={{ width: '80%', marginRight:'10px', marginLeft:'15px' }}>
                    <Form.Control
                        type="text"
                        placeholder="Ajouter une tâche..."
                        value={description}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="outline-primary" onClick={handleSubmit}>
                    Ajouter
                </Button>
            </div>
        </Form>
    );
};

export default AddTask;
