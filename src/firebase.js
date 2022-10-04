// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEJsdabry4LoJ4i6MPdooNN1-CGq6gnNQ",
  authDomain: "drinks-fa5da.firebaseapp.com",
  projectId: "drinks-fa5da",
  storageBucket: "drinks-fa5da.appspot.com",
  messagingSenderId: "306954733433",
  appId: "1:306954733433:web:2d1a19acf2f96f900c91a8",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export default fb;
