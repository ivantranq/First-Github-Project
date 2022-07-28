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
    this.state ={
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      locationTravel: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange(event) {
    const {name, value, type, checked} = event.target

    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})

  }

  handleSubmit() {
    alert(
      `Firstname: ${this.state.firstName}
      LastName: ${this.state.lastName}
      Age: ${this.state.age}
      Gender: ${this.state.gender}
      Location: ${this.state.locationTravel}
      Dietary Restrictions: ${this.state.dietRestriction}`
      )
  }

  render() {
    return(
      <main>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name='firstName' 
            placeholder='First Name' 
            onChange={this.handleChange}
            value={this.state.firstName}
          />
          <br />

          <input 
            type="text" 
            name='lastName' 
            placeholder='Last Name' 
            onChange={this.handleChange}
            value={this.state.lastName}
          />
          <br />

          <input 
            type="text" 
            name='age' 
            placeholder='Age'
            onChange={this.handleChange}
            value={this.state.age}
          />
          <br />

          <input 
            type="radio" 
            name='gender' 
            onChange={this.handleChange} 
            value="Male"
          />Male

          <input 
            type="radio" 
            name='gender' 
            onChange={this.handleChange} 
            value="Female"
          />Female
          <br />

          <label>Travel Location: </label>
          <select name="locationTravel" onChange={this.handleChange} value={this.state.locationTravel}>
            <option value="">Choose a destination</option>
            <option value="Australia">Australia</option>
            <option value="Philippines">Philippines</option>
            <option value="Thailand">Thailand</option>
          </select><br />

          <label>Dietary Restrictions: </label>
          <label>
            <input 
              type="checkbox" 
              name="isVegan"
              onChange={this.handleChange}
              checked={this.state.isVegan}
            />Vegan?
          </label>
          
          <label>
            <input 
              type="checkbox" 
              name="isKosher"
              onChange={this.handleChange}
              checked={this.state.isKosher}
            />Kosher?
          </label>

          <label>
            <input 
              type="checkbox" 
              name="isLactoseFree"
              onChange={this.handleChange}
              checked={this.state.isLactoseFree}
            />Lactose Free?
          </label>
          <br />
          <button>Submit</button>
        </form>
        <br />
        <hr />
        <br />
        <h1>Entered Information:</h1>
        <p>Your name: {this.state.firstName} {this.state.lastName}</p>
        <p>Your age: {this.state.age}</p>
        <p>Your gender: {this.state.gender}</p>
        <p>Location you are travelling to: {this.state.locationTravel}</p>
        <p>Your dietary restrictions: </p>
        <p>Vegan: {this.state.isVegan ? "Yes " : "No "} </p>
        <p>Kosher: {this.state.isKosher ? "Yes " : "No "} </p>
        <p>Lactose Free: {this.state.isLactoseFree ? "Yes " : "No "} </p>
      </main>
    )
  }
}


export default App;
