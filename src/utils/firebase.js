// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqpqeksgPUgTKQXPZAKO1PsvXqbAlrmV0",
  authDomain: "netflixgpt-43edf.firebaseapp.com",
  projectId: "netflixgpt-43edf",
  storageBucket: "netflixgpt-43edf.firebasestorage.app",
  messagingSenderId: "762237025122",
  appId: "1:762237025122:web:6bc6f90e6c30bd8cc1ca3b",
  measurementId: "G-30VK4H3EEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);