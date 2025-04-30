// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2N0ixz5kbSSpo9U3ucKLubSfLNRU3Epw",
  authDomain: "hanirvesh-api-project.firebaseapp.com",
  databaseURL: "https://hanirvesh-api-project-default-rtdb.firebaseio.com",
  projectId: "hanirvesh-api-project",
  storageBucket: "hanirvesh-api-project.firebasestorage.app",
  messagingSenderId: "430172831409",
  appId: "1:430172831409:web:7b1f7eb6d2bc32def62c90",
  measurementId: "G-YH3PSQL4DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);