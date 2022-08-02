import './App.css';
import { auth } from './firebase/init'
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';

function App() {
  const[loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({})


  function register() {
    console.log("register")
    createUserWithEmailAndPassword(auth, 'email@email.com', "password")
    .then((user) => {
      // Signed in 
      console.log(user)
      // ...
    })
    .catch((error) => {
      console.log(error)
      // ..
    });
  }

  
  function login() {
    setLoggedIn(true)
    signInWithEmailAndPassword(auth, 'email@email.com', "password")
    .then(({user}) => {
      // Signed in 
      console.log(user)
      const userLetter = user.email[0]
    })
    .catch((error) => {
      console.log(error)
    });
  }

  function logout() {
    signOut(auth)
    setUser({})
    setLoggedIn(false)
  }

  return (
    <nav className="App">
      <img src={require('./assets/logo.png')} alt="" className='logo__img'/>
      {
        !loggedIn ? 
        ( <div className='nav__content'>
            <button onClick={login} className="login">Login</button>
            <button onClick={register} className="register">Register</button>
          </div>
        ) : (
          <button onClick={logout} className="logout-button">E</button>
        )
      }
      
    </nav>
  );
}

export default App;
