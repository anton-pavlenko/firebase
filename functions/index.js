import {functions} from 'firebase-functions'
import {admin} from 'firebase-admin'
import {firebase} from 'firebase'

const app = require('express')()
admin.initializeApp()

const config = {
    apiKey: "AIzaSyBJI0XMRR9pvNcfJA0Ctj6wNjT38CCSt80",
    authDomain: "flyclever-cd51a.firebaseapp.com",
    databaseURL: "https://flyclever-cd51a.firebaseio.com",
    projectId: "flyclever-cd51a",
    storageBucket: "flyclever-cd51a.appspot.com",
    messagingSenderId: "334083199814",
    appId: "1:334083199814:web:0afb925e5d70f7ae730b47",
    measurementId: "G-R5TSFNQEVR"
}


firebase.initializeApp(config)



//signin route

app.post('/partner/login', (req,res) => {
    const newUser = {
        email:req.body.email,
        password:req.body.password
    }

    firebase.auth().signInWithEmailAndPassword(newUser.email, newUser.password)
    .then (data => {
        return res.status(201).json({message:`user ${data.user.uid} signed up successfuly`})
    })
    .catch(error => {
        console.log(error)
        return res.status(500).json({error:error.code})
    })
})

exports.api = functions.region('europe-west1').https.onRequest(app)