import React from 'react';
// 책 버그 - 상대 경로 지정 미스
// import TodoListItem from './TodoListItem';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
            ))}
        </div>
    );
};

export default TodoList;
