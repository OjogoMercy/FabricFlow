// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD29KA3zS3la7B2ogK_81zM-MA5qa6Qraw",
  authDomain: "fashion-app-e5c08.firebaseapp.com",
  projectId: "fashion-app-e5c08",
  storageBucket: "fashion-app-e5c08.firebasestorage.app",
  messagingSenderId: "486567613046",
  appId: "1:486567613046:web:edfb049fb175c1f9b5c557",
  measurementId: "G-H3WS93B6ML"
};  

// Initialize Firebase
export const FIREBASE_APP   = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)