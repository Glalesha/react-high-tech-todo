import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDO1XXbgUUQg_kz6RA1c-cE76TeZZCPscM",
  authDomain: "todo-1aaef.firebaseapp.com",
  databaseURL: "https://todo-1aaef.firebaseio.com",
  projectId: "todo-1aaef",
  storageBucket: "todo-1aaef.appspot.com",
  messagingSenderId: "573268486202",
  appId: "1:573268486202:web:550bc18b89b3910483ad03",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db };
