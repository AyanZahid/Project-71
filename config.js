import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDRo6GVynesd5m66pJA9YXEgol7dg5jWtw",
    authDomain: "project-71-81b0a.firebaseapp.com",
    projectId: "project-71-81b0a",
    storageBucket: "project-71-81b0a.appspot.com",
    messagingSenderId: "811904751215",
    appId: "1:811904751215:web:8508aada1adc7677dbdf9a"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
