import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoList from './components/TodoList';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div style={{ padding: '20px' }}>
                <h1>Todo App</h1>
                <TodoList />
            </div>
        </Provider>
    );
};

export default App;
