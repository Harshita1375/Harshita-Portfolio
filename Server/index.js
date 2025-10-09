require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const twilio = require('twilio');

const app = express();

// --- Middleware ---
// This is crucial for your server to be able to read the JSON data from the form
app.use(express.json()); 

// --- Database Connection ---
const dbURI = process.env.MONGO_URI;
mongoose.connect(dbURI)
  .then(() => console.log('Successfully connected to MongoDB Atlas!'))
  .catch((error) => {
    console.error('!!! DATABASE CONNECTION FAILED:', error);
    process.exit(1);
  });

// --- Mongoose Schema & Model for Messages ---
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

const Message = mongoose.model('Message', messageSchema);

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

// Test route
app.get('/api', (req, res) => {
  res.send('Backend server is alive and running!');
});

// --- NEW: API Route to Handle Contact Form Submission ---
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic Validation
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please enter all fields.' });
    }

    // 1. Save the message to MongoDB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log('Message saved to database.');

    // 2. Send SMS notification via Twilio
    const smsBody = `New Portfolio Message!\nFrom: ${name}\nEmail: ${email}\nMessage: ${message}`;
    sendNotification(smsBody);

    // 3. Send a success response back to the frontend
    res.status(201).json({ msg: 'Message sent successfully! Thank you for reaching out.' });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ msg: 'Server error. Please try again later.' });
  }
});


// --- Start The Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});