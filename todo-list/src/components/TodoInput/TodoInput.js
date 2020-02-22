import React, { Component } from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
/** props
 * value: input 값
 * onChange: input 변경 event
 * onInsert: Add button click event
 */
const TodoInput = ({ value, onChange, onInsert }) => {
    const handleKeyPress = e => {
        e.key === 'Enter' && onInsert();
    };

    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
            <div className={cx('add-button')} onClick={onInsert}>
                Add
            </div>
        </div>
    );
};

export default TodoInput;
