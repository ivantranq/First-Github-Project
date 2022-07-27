import './App.css';
// import Todo from './components/todoItem'
// import todosData from './components/todosData';
import React from 'react';

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: todosData
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(id) {
//     this.setState(prevState => {
//       const updatedTodos = prevState.todos.map(todo => {
//         if (todo.id === id) {
//           todo.completed = !todo.completed
//           console.log(todo.completed, todo.id, id)
//         }
//         return todo
//       })
//       return {
//         todos: updatedTodos
//       }
//     })
//   }

//   render() {
//     const todoItems = this.state.todos.map(elem => <Todo key={elem.id} todo={elem}
//     handleChange = {this.handleChange}/>)
//     return(
//       <div className='App'>
//         {todoItems}
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      }
    })
  }

  render() {
    return (
      <div>
        <h1>You are currently {this.state.loggedIn ? "Logged in" : "Logged out"}</h1>
        <button onClick={this.handleClick}>{this.state.loggedIn ? "LOG OUT" : "LOG IN"}</button>
      </div>
    )
  }
}


export default App;
