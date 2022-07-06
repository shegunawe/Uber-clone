// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5jgs-9oSkZgi7j_Un-X2of_03ffJIYuQ",
  authDomain: "uber-next-clone-1b092.firebaseapp.com",
  projectId: "uber-next-clone-1b092",
  storageBucket: "uber-next-clone-1b092.appspot.com",
  messagingSenderId: "528467373508",
  appId: "1:528467373508:web:bb6f6a653d826ac1e70891",
  measurementId: "G-QV9VT6Q3K1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()


export {app, provider, auth}