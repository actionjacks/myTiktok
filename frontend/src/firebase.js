import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAe4jeqqysBnsqL4tGuz2MADCXFoD1DXnM",
  authDomain: "mytik-tok-2181f.firebaseapp.com",
  databaseURL: "https://mytik-tok-2181f.firebaseio.com",
  projectId: "mytik-tok-2181f",
  storageBucket: "mytik-tok-2181f.appspot.com",
  messagingSenderId: "113020530237",
  appId: "1:113020530237:web:00c60476f478af0cc8c454",
  measurementId: "G-7YPDJZ5RNQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
