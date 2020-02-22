import React, { Component } from 'react';
import PageTemplate from './PageTemplate/PageTemplate';
import TodoInput from './TodoInput/TodoInput';
import TodoList from './TodoList/TodoList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            todos: [{ id: 0, text: '리액트 공부하기', done: true }, { id: 1, text: '컴포넌트 스타일링 해보기', done: false }]
        };
    }

    _id = 1;
    _getId = () => {
        return ++this._id;
    };

    handleChange = e => {
        const { value } = e.target;
        this.setState({
            input: value
        });
    };

    handleInsert = () => {
        const { todos, input } = this.state;
        const newTodo = {
            text: input,
            done: false,
            id: this._getId()
        };
        this.setState({
            todos: [...todos, newTodo],
            input: ''
        });
    };

    handleToggle = id => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);
        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        this.setState({
            todos: [...todos.slice(0, index), toggled, ...todos.slice(index + 1)]
        });
    };

    handleRemove = id => {
        const { todos } = this.state;
        const index = todos.findIndex(todo => todo.id === id);

        this.setState({
            todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
        });
    };

    render() {
        const { input, todos } = this.state;
        const { handleChange, handleInsert, handleToggle, handleRemove } = this;
        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
                <TodoList todos={todos} onToggle={handleToggle} onRemove={this.handleRemove} />
            </PageTemplate>
        );
    }
}

export default App;
