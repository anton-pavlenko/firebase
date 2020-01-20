import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const Config = {
    apiKey: "AIzaSyBJI0XMRR9pvNcfJA0Ctj6wNjT38CCSt80",
    authDomain: "flyclever-cd51a.firebaseapp.com",
    databaseURL: "https://flyclever-cd51a.firebaseio.com",
    projectId: "flyclever-cd51a",
    storageBucket: "flyclever-cd51a.appspot.com",
    messagingSenderId: "334083199814",
    appId: "1:334083199814:web:0afb925e5d70f7ae730b47",
    measurementId: "G-R5TSFNQEVR"
  };

  firebase.initializeApp(Config);
  firebase