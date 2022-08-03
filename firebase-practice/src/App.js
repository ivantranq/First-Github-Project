import './App.css';
import { auth, db } from './firebase/init'
import { 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithEmailAndPassword, 
  onAuthStateChanged 
} from "firebase/auth";
import {  } from "firebase/auth";
import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, getDoc, query, where, updateDoc } from 'firebase/firestore'

function App() {
  const[loggedIn, setLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({})

  function updatePost() {
    const hardcodedId = "F3m20PuuOOKf8FFwLXpB"
    const postRef = doc(db, "posts", hardcodedId);
    const newPost = {
      description: "Finish Frontend Simplified",
      uid: "1",
      title: "Land a $300k job"
    };
    updateDoc(postRef, newPost)
  }

  function createPost() {
    const post = { 
      title: "Finish Firebase Section",
      description: "Do Frontend Simplified",
      uid: user.uid
    };
    addDoc(collection(db, "posts"), post)
  }

  async function getAllPosts() {
    const { docs } = await getDocs(collection(db, "posts"));
    const posts = docs.map(elem => ({...elem.data(), id:elem.id}))
  }

  async function getPostByID() {
    const hardcodedId = "F3m20PuuOOKf8FFwLXpB"
    const postRef = doc(db, "posts", hardcodedId);
    const postSnap = await getDoc(postRef);
    const post = postSnap.data();
    console.log(post);
  }

  async function getPostByUid() {
    const postCollectionRef = await query(
      collection(db, "posts"),
      where("uid", "==", user.uid)
    );
    const { docs } = await getDocs(postCollectionRef);
    console.log(docs)

  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if(user) {
        setUser(user);
      }
    });
  }, []);

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
    <div>
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
      <button onClick={createPost}>Create Post</button>
      <button onClick ={getAllPosts}>Get All Posts</button>
      <button onClick={getPostByID}>Get Post by ID</button>
      <button onClick={getPostByUid}>Get Post by Uid</button>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}

export default App;
