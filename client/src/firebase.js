// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realstate-6ee71.firebaseapp.com",
  projectId: "mern-realstate-6ee71",
  storageBucket: "mern-realstate-6ee71.appspot.com",
  messagingSenderId: "238881349955",
  appId: "1:238881349955:web:b0426b9eae78b5393d8ff6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
