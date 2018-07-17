import Rebase from "re-base";
import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBf_Q2WkZiEGGM8vv6DWnk4nx7S9T_6yJQ",
  authDomain: "react-firebase-ms.firebaseapp.com",
  databaseURL: "https://react-firebase-ms.firebaseio.com",
  projectId: "react-firebase-ms",
  storageBucket: "react-firebase-ms.appspot.com",
  messagingSenderId: "220653436434"
});

const base = Rebase.createClass(app.database());

export { app, base };
