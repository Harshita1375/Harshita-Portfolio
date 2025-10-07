require('dotenv').config();
const mongoose = require('mongoose');

// This line reads the MONGO_URI from the environment variables
// On Render, it will be the value you just set.
// For local development, it will read from your .env file.
const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
  .then(() => console.log('Successfully connected to MongoDB Atlas!'))
  .catch((error) => {
    console.error('!!! DATABASE CONNECTION FAILED:', error); // <-- More descriptive log
    process.exit(1); // <-- Force exit with a failure code
  });

  const twilio = require('twilio');

// Initialize the Twilio client using the environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Example function to send a message
function sendNotification(messageBody) {
  client.messages
    .create({
      body: messageBody,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
      to: process.env.MY_PHONE_NUMBER        // Your personal number
    })
    .then(message => console.log('SMS notification sent!', message.sid))
    .catch(error => console.error('Error sending SMS:', error));
}