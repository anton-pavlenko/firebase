/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

// [START all]
// [START import]
// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');
const validator = require('validator');

// The Firebase Admin SDK to access the Cloud Firestore.
const admin = require('firebase-admin');
// [END import]

const serviceAccount = require('./firebase/firebase-key');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

// [START addBooking]
// Take the text parameter passed to this HTTP endpoint and insert it into 
// Cloud Firestore under the path /messages/:documentId/original
// [START addMessageTrigger]
exports.addBook = functions.https.onRequest(async (req, res) => {
// [END addMessageTrigger]
  // Grab the text parameter.

  const fs = require('fs');
  
  const data = {};

  //bookingType
  if(!req.query.bookingType || req.query.bookingType != 'flight'){
    res.status(400).json({result: `bookingType ('string'): valid options: 'flight'`})
    return
  }
  data.bookingType = req.query.bookingType;
  
  //tripType
  const tripTypes = ['round-trip','one-way','multi-city'];
  if(tripTypes.includes(req.query.tripType) !== true){
    res.status(400).json({result: `tripType ('string'): Valid options: 'round-trip', 'one-way', 'multi-city'`})
    return
  }
  data.tripType = req.query.tripType;
  
  //flightClass
  const flightClasses = ['Economy','Business','First'];
  if(flightClasses.includes(req.query.flightClass) !== true){
    res.status(400).json({result: `flightClass ('string'): not valid option`})
    return
  }
  data.flightClass = req.query.flightClass;
  
  //passengers
  +req.query.passengers;
  if(!req.query.passengers || isNaN(req.query.passengers)){
    res.status(400).json({result: `passengers ('number'): not valid option`})
    return
  }
  data.passengers = parseInt(req.query.passengers);
  
  //origin
  const dataBuffer = fs.readFileSync('IATA_codes.json');
  const dataJSON = dataBuffer.toString()
  const IATA = JSON.parse(dataJSON)

  if(IATA.includes(req.query.origin) !== true){
    res.status(400).json({result: `origin ('IATA Code of Origin Airport'): not valid option`})
    return
  }
  data.origin = req.query.origin;

  //destination
  if(IATA.includes(req.query.destination) !== true){
    res.status(400).json({result: `destination ('IATA Code of destination Airport'): not valid option`})
    return
  }
  data.destination = req.query.destination;

  //departDate
  if(!req.query.departDate || !validator.toDate(req.query.departDate)){
    res.status(400).json({result: `departDate: not valid format`})
    return
  }
  data.departDate = validator.toDate(req.query.departDate).toISOString();
  
  //departureTimeOfDay 
  const departureTimeOfDays = ['No Preference','Morning','Afternoon','Evening']; 
  if(departureTimeOfDays.includes(req.query.departureTimeOfDay) !== true){
    res.status(400).json({result: `departureTimeOfDay ('string'): Valid options: 'No Preference', 'Morning', 'Afternoon', 'Evening'`})
    return
  }
  data.departureTimeOfDay = req.query.departureTimeOfDay;
  
  //departureStopPreference 
  const departureStopPreferences = ['No Preference','Non-Stop','1 Stop','2+ Stops']; 
  if(departureStopPreferences.includes(req.query.departureStopPreference) !== true){
    res.status(400).json({result: `departureStopPreference ('string'): Valid options: 'No Preference', 'Non-Stop', '1 Stop', '2+ Stops'`})
    return
  }
  data.departureStopPreference = req.query.departureStopPreference;

  //flexDeparts 
  const flexDeparts = ['No', '+/- 1 Days', '+/- 2 Days', '+/- 3 Days', '+/- 4 Days', '+/- 5 Days', '+/- 6 Days', '+/- 7 Days']; 
  if(flexDeparts.includes(req.query.flexDepart) !== true){
    res.status(400).json({result: `flexDepart ('string'): Valid options: 'No', '+/- 1 Days', '+/- 2 Days', '+/- 3 Days', '+/- 4 Days', '+/- 5 Days', '+/- 6 Days', '+/- 7 Days'`})
    return
  }
  data.flexDepart = req.query.flexDepart;

  //returnDate
  if(!req.query.returnDate || !validator.toDate(req.query.returnDate)){
    res.status(400).json({result: `returnDate: not valid format`})
    return
  }
  data.returnDate = validator.toDate(req.query.returnDate).toISOString();

  //returnTimeOfDay 
  const returnTimeOfDays = ['No Preference','Morning','Afternoon','Evening']; 
  if(returnTimeOfDays.includes(req.query.returnTimeOfDay) !== true){
    res.status(400).json({result: `returnTimeOfDay ('string'): Valid options: 'No Preference', 'Morning', 'Afternoon', 'Evening'`})
    return
  }
  data.returnTimeOfDay = req.query.returnTimeOfDay;

  //returnStopPreference 
  const returnStopPreferences = ['No Preference','Non-Stop','1 Stop','2+ Stops']; 
  if(returnStopPreferences.includes(req.query.returnStopPreference) !== true){
    res.status(400).json({result: `returnStopPreference ('string'): Valid options: 'No Preference', 'Non-Stop', '1 Stop', '2+ Stops'`})
    return
  }
  data.returnStopPreference = req.query.returnStopPreference;

  //flexDeparts 
  const flexReturns = ['No', '+/- 1 Days', '+/- 2 Days', '+/- 3 Days', '+/- 4 Days', '+/- 5 Days', '+/- 6 Days', '+/- 7 Days']; 
  if(flexReturns.includes(req.query.flexReturn) !== true){
    res.status(400).json({result: `flexReturn ('string'): Valid options: 'No', '+/- 1 Days', '+/- 2 Days', '+/- 3 Days', '+/- 4 Days', '+/- 5 Days', '+/- 6 Days', '+/- 7 Days'`})
    return
  }
  data.flexReturn = req.query.flexReturn;

  //notes
  data.notes = req.query.notes;

  //name
  if(!req.query.name || req.query.name.length < 1){
    res.status(400).json({result: `name ('string'): not valid`})
    return
  }
  data.name = req.query.name;

  //Email
  if(!req.query.email || !validator.isEmail(req.query.email)){
    res.status(400).json({result: `email ('string'): not valid format`})
    return
  }
  data.email = req.query.email;
  
  //phone
  if(!req.query.phone || req.query.name.phone < 1){
    res.status(400).json({result: `phone ('string'): not valid`})
    return
  }
  data.phone = req.query.phone;

  //contactClient
  data.contactClient = data.contactClient ? true : false;

  data.partner = "Fly Clever";
  const writeResult = await admin.firestore().collection('booking').add({data: data});
  res.status(200).json({result: `Message with ID: ${writeResult.id} added.`});

  // // [START adminSdkAdd]
  // // Push the new message into Cloud Firestore using the Firebase Admin SDK.
  // // Send back a message that we've succesfully written the message
  // res.json({result: `Message with ID: ${writeResult.id} added.`});
  // [END adminSdkAdd]
});

// [END addMessage]

// [START makeUppercase]
// Listens for new messages added to /messages/:documentId/original and creates an
// uppercase version of the message to /messages/:documentId/uppercase
// [START makeUppercaseTrigger]
// exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
//     .onCreate((snap, context) => {
// // [END makeUppercaseTrigger]
//       // [START makeUppercaseBody]
//       // Grab the current value of what was written to the Cloud Firestore.
//       const original = snap.data().original;
//       console.log('Uppercasing', context.params.documentId, original);
//       const uppercase = original.toUpperCase();
//       // You must return a Promise when performing asynchronous tasks inside a Functions such as
//       // writing to the Cloud Firestore.
//       // Setting an 'uppercase' field in the Cloud Firestore document returns a Promise.
//       return snap.ref.set({uppercase}, {merge: true});
//       // [END makeUppercaseBody]
//     });
// [END makeUppercase]
// [END all]