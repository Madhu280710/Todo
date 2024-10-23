import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Todo } from '../types/todoTypes';

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: [],
};

const api = axios.create({
    baseURL: 'http://localhost:8080/api', // Base URL for the backend
});

export const fetchTodos = createAsyncThunk<Todo[], void>(
    'todos/fetchTodos',
    async () => {
        const response = await api.get('/todos');
        return response.data;
    }
);

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
            });
    },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
