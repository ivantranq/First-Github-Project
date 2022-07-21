import './App.css';
import Todo from './components/todoItem'
import todosData from './components/todosData';

function App() {
  
  const todoItems = todosData.map(elem => <Todo key={elem.id} todo={elem}/>)

  return (
    <div className="App">
      {todoItems}
    </div>
  );
}

export default App;
