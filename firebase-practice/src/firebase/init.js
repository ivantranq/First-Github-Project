// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8k-fMmIk8q47frO7Dz3ax3PXe8JCYYzY",
  authDomain: "fir-practice-e0325.firebaseapp.com",
  projectId: "fir-practice-e0325",
  storageBucket: "fir-practice-e0325.appspot.com",
  messagingSenderId: "924260439480",
  appId: "1:924260439480:web:2e7a1e3bd384e7dfbdab4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();