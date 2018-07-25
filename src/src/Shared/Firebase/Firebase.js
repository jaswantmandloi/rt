
 //import {initializeApp, auth, database} from 'firebase';

 import * as firebase from 'firebase/app';
 import 'firebase/database';
 import 'firebase/auth';

let initializeApp = firebase.initializeApp;
let auth = firebase.auth;
let database = firebase.database;

let firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

// Initialize firebase instance
initializeApp(firebaseConfig)



export  {auth, database};
