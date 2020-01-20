const express = require('express');
const cors = require('cors');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const firebaseAdmin = require('firebase-admin');
const functions = require("firebase-functions")
const path = require('path');
const bodyParser = require('body-parser')
const auth = require('./src/components/middleware/auth')

import SignedOutLinks from './src/components/layout/SignedOutLinks'
import admin from 'firebase-admin';
import { Server } from 'http';

// const userRouter = require('../app/src/components/routers/user')





  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});




const app = express();
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use(userRouter)


const serviceAccount = require('./firebase/firebase-key.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

app.get('/firebase', jwtCheck, async (req, res) => {
  const {sub: uid} = req.user;

  try {
    const firebaseToken = await firebaseAdmin.auth().createCustomToken(uid);
    res.json({firebaseToken});
  } catch (err) {
    res.status(500).send({
      message: 'Something went wrong acquiring a Firebase token.',
      error: err
    });
  }
});


  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
  // Handle Errors here.

  var errorCode = error.code;
  var errorMessage = error.message;
  if (errorCode == 'auth/weak-password') {
    alert('The password is too weak.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});




app.listen(3001, () => console.log('Server running on localhost:3001'));


