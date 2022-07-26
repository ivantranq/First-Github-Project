import React from 'react';

const TodoItem = (props) => {
    console.log("this ran", props.todo.id)
    return (
        <div>
            <div style={{display: "flex"}}>
                <input 
                    type="checkbox" 
                    checked={props.todo.completed}
                    onChange = {() => props.handleChange(props.todo.id)}
                />
                <p style={{paddingLeft: 16, maxWidth: 200}}>{props.todo.text}</p>  
            </div>
            <hr />
        </div>
    );
}

export default TodoItem;
