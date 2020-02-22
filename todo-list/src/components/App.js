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

    render() {
        const { input, todos } = this.state;
        const { handleChange, handleInsert } = this;
        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
                <TodoList todos={todos} />
            </PageTemplate>
        );
    }
}

export default App;
