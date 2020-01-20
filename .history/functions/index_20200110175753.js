// const firebase = require("firebase");
// const firebaseAdmin = require('firebase-admin')
// const functions = require("firebase-functions")
// const express = require('express');
// const port =5001;
// const cors = require('cors')
// const app = express();
// // const bodyParser = require('body-parser');

// firebaseConfig  = {
//   apiKey: "AIzaSyBJI0XMRR9pvNcfJA0Ctj6wNjT38CCSt80",
//   authDomain: "flyclever-cd51a.firebaseapp.com",
//   databaseURL: "https://flyclever-cd51a.firebaseio.com",
//   projectId: "flyclever-cd51a",
//   storageBucket: "flyclever-cd51a.appspot.com",
//   messagingSenderId: "334083199814",
//   appId: "1:334083199814:web:0afb925e5d70f7ae730b47",
//   measurementId: "G-R5TSFNQEVR"
// };

// // const serviceAccount = require('./firebase/firebase-key');

// firebase.initializeApp(firebaseConfig);

// // firebase.initializeApp({
// //   credential: firebaseAdmin.credential.cert(serviceAccount),
// //   databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
// // });

// app.use(cors())

// app.use(express.json());

// app.listen(port, function () {
//   console.log('Server running on ' + port);
// })

// const auth = firebase.auth

// app.post('/sign-in', (req, res) => {

//   const data = JSON.parse(req.body)

//   const email = data.email
//   const password = data.password
  
  
//   auth().signInWithEmailAndPassword(email, password).then(function(result) {
//     if (res.method == 'OPTIONS') {
//         res.writeHead(200, {
//           "Access-Control-Allow-Origin": "*",
//         });
//     }
//     return res.send({status: 'success', data: result});
//   }).catch(function(error) {
//     return res.status(400).send({status: "error",message: 'Incorrect Username/Password'})
//   })
// })

// app.get('/test', (req, res) => {
//    console.log('test');
  
//   return res.send({status: 'success'});
// })

// process.on('uncaughtException', function (err) {
//   console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
//   console.error(err.stack)
//   process.exit(1)
// })

// exports.app = functions.https.onRequest(app);


// const cors = require('cors');
// const jwt = require('express-jwt');
// const jwks = require('jwks-rsa');
// const path = require('path');

// app.use(cors());
// app.use('/', express.static(path.join(__dirname, 'public')));

// const jwtCheck = jwt({
//   secret: jwks.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
//   }),
//   audience: process.env.AUTH0_API_AUDIENCE,
//   issuer: `https://${process.env.AUTH0_DOMAIN}/`,
//   algorithm: 'RS256'
// });

//const serviceAccount = require('./firebase/firebase-key');

// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert(serviceAccount),
//   databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
// });

// app.get('/firebase', jwtCheck, async (req, res) => {
//   const {sub: uid} = req.user;

//   try {
//     const firebaseToken = await firebaseAdmin.auth().createCustomToken(uid);
//     res.json({firebaseToken});
//   } catch (err) {
//     res.status(500).send({
//       message: 'Something went wrong acquiring a Firebase token.',
//       error: err
//     });
//   }
// });

// app.listen(3001, () => console.log('Server running on localhost:3001'));

// export AUTH0_DOMAIN='dev--jul69kv.auth0.com';
// export AUTH0_API_AUDIENCE='rB5fzydRwJqVKqo5pJNRIHxQGWJGHVlu';