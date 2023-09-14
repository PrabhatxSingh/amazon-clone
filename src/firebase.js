import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPphEJ1HRmi5QVmwi7HDt7lvpSiQZJDWI",
  authDomain: "clone-3288b.firebaseapp.com",
  projectId: "clone-3288b",
  storageBucket: "clone-3288b.appspot.com",
  messagingSenderId: "640346848304",
  appId: "1:640346848304:web:5d7cfa7629ca3312dac1f5",
  measurementId: "G-6JT0FRXWCY",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
