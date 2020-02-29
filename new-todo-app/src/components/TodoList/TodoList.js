import React from 'react';
// 책 버그 - 상대 경로 지정 미스
// import TodoListItem from './TodoListItem';
import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss';

const TodoList = () => {
    return (
        <div className="TodoList">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoList;
