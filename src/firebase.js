import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCDfjov8qw8W48nO515lYF-u3W5ikrZa0A",
  authDomain: "clone-c2190.firebaseapp.com",
  databaseURL: "https://clone-c2190.firebaseio.com",
  projectId: "clone-c2190",
  storageBucket: "clone-c2190.appspot.com",
  messagingSenderId: "760061493056",
  appId: "1:760061493056:web:eb5f7f7d8532c50a6c04a5",
  measurementId: "G-C944LP8PJB",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
