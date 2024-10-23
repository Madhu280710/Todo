import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, addTodo, removeTodo } from '../features/todoSlice';
import { TextField, Button, List, ListItem, ListItemText, Checkbox } from '@mui/material';
import { AppDispatch, RootState } from '../app/store';

const TodoList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch(); // Typed dispatch
    const todos = useSelector((state: RootState) => state.todos.todos);
    const [title, setTitle] = useState('');

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
        if (title) {
            dispatch(addTodo({ title, completed: false }));
            setTitle('');
        }
    };

    const handleDeleteTodo = (id: number) => {
        dispatch(removeTodo(id));
    };

    return (
        <div>
            <TextField
                label="Todo Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Button onClick={handleAddTodo}>Add Todo</Button>
            <List>
                {todos.map(todo => (
                    <ListItem key={todo.id}>
                        <Checkbox checked={todo.completed} />
                        <ListItemText primary={todo.title} />
                        <Button onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default TodoList;
