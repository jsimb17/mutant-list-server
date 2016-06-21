// Create references for libraries
var express = require('express');
var http = require('http');
var firebase = require('firebase');
var dotenv = require('dotenv');
var twilio = require('twilio');

// Express server setup
var app = express();
var server = http.createServer(app);
dotenv.load();

// Authenticate firebase
firebase.initializeApp ({
  serviceAccount: "firebase-credentials.json",
  databaseURL: "https://mutant-school.firebaseio.com"
});

// Authenticate twilio and create twilio client
var twilioClient = twilio(process.env.TWILIO_SID,
process.env.TWILIO_AUTH_TOKEN);

// Get reference to firebase
var ref = firebase.database().ref();

// Listen for new texts being created on firebase



client.messages.create({
    body: 'Hello from Node',
    to: '+5134043631',  // Text this number
    from: '+5132140487' // From a valid Twilio number
}, function(err, message) {
    console.log(message.sid);
});
