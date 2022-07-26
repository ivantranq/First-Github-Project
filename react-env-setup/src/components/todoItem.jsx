import React from 'react';

const TodoItem = (props) => {
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

// class TodoItem extends React.Component {
//     render() {
//         return(
//             <div>
//                 <div style={{display: "flex"}}>
//                     <input 
//                         type="checkbox" 
//                         checked={this.state.completed} 
//                         onChange={(event) => this.props.handleChange()}
//                     />
//                     <p style={{paddingLeft: 16, maxWidth: 200}}>{this.state.text}</p>  
//                 </div>
//                 <hr />
//             </div>
//         )
//     }
// }

export default TodoItem;
