// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4Fe5JntMJOvSzGfFUZR5NuzjzLr0SZ6E",
  authDomain: "cycle-5165c.firebaseapp.com",
  projectId: "cycle-5165c",
  storageBucket: "cycle-5165c.appspot.com",
  messagingSenderId: "454479850156",
  appId: "1:454479850156:web:e70c6627e45936c9420d09",
  measurementId: "G-M35DZXJ6JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}