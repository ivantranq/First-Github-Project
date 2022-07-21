import React from 'react';

const TodoItem = (props) => {
    return (
        <div>
            <div style={{display: "flex"}}>
                <input type="checkbox" checked={props.todo.completed}/>
                <p style={{paddingLeft: 16, maxWidth: 200}}>{props.todo.text}</p>  
            </div>
            <hr />
        </div>
    );
}

export default TodoItem;
