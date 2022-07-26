import './App.css';
import Todo from './components/todoItem'
import todosData from './components/todosData';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
          console.log(todo.completed)
        }
        console.log(todo)
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const todoItems = this.state.todos.map(elem => <Todo key={elem.id} todo={elem}
    handleChange = {this.handleChange}/>)
    return(
      <div className='App'>
        {todoItems}
      </div>
    )
  }
}


export default App;
