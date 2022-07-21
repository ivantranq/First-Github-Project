import React from 'react';
import './css/checkbox.css'
import TodoItem from './todoItem';

const FirstObjective = () => {
    return (
        <div>
            <h1>To Do list</h1>
            <form action="">
                <TodoItem></TodoItem>
                <TodoItem></TodoItem>
                <TodoItem></TodoItem>
                <TodoItem></TodoItem>
            </form>
        </div>
    );
}

export default FirstObjective;
