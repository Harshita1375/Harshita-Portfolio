require('dotenv').config();
const express = require('express'); // <-- NEW
const mongoose = require('mongoose');
const twilio = require('twilio');

const app = express(); // <-- NEW

// --- Database Connection ---
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI)
  .then(() => console.log('Successfully connected to MongoDB Atlas!'))
  .catch((error) => {
    console.error('!!! DATABASE CONNECTION FAILED:', error);
    process.exit(1);
  });

// --- Twilio Setup ---
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

function sendNotification(messageBody) {
  client.messages
    .create({
      body: messageBody,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.MY_PHONE_NUMBER
    })
    .then(message => console.log('SMS notification sent!', message.sid))
    .catch(error => console.error('Error sending SMS:', error));
}

// --- Server Routes ---
// This is a test route to check if your server is running
app.get('/api', (req, res) => { // <-- NEW
  res.send('Backend server is alive and running!');
});

// --- Start The Server ---
const PORT = process.env.PORT || 5000; // <-- NEW: Use Render's port or 5000 for local
app.listen(PORT, () => { // <-- NEW
  console.log(`Server is listening on port ${PORT}`);
});