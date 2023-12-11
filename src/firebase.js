// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmV0-ZwcyjKO6Z-zivdBHBIuMZM1NL6Lc",
  authDomain: "flex-flow-app.firebaseapp.com",
  projectId: "flex-flow-app",
  storageBucket: "flex-flow-app.appspot.com",
  messagingSenderId: "166132720941",
  appId: "1:166132720941:web:d44e4f42d667155aab9fa4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
