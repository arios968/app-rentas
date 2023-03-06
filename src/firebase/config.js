// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8LTtVi1GTbyr51LrfTUP9J_MF7tZjmp4",
  authDomain: "sprint-final-b407e.firebaseapp.com",
  projectId: "sprint-final-b407e",
  storageBucket: "sprint-final-b407e.appspot.com",
  messagingSenderId: "159823560642",
  appId: "1:159823560642:web:cb1e0f485d60fae350e05b",
  measurementId: "G-XSJPCV0QFW",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const DB = getFirestore(FirebaseApp);
