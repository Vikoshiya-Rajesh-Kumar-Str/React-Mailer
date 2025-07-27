const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS for both development and production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://react-mailer-vikoshiya.vercel.app' : 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Add a health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Log email configuration
console.log("EMAIL USER:", process.env.GMAIL_USER);
console.log("EMAIL PASS:", process.env.GMAIL_PASS ? "✓ exists" : "✗ missing");
console.log("ADMIN EMAIL:", process.env.ADMIN_EMAIL || "vikoshiya.rajeshkumar@gmail.com");

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Confirmation email to user
  const userMailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: 'Thank you for contacting us!',
    text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get back to you soon.\n\nYour message: ${message}`,
  };

  // Details email to admin
  const adminMailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.ADMIN_EMAIL || "vikoshiya.rajeshkumar@gmail.com",
    subject: 'New Contact Form Submission',
    text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);
    res.status(200).json({ message: 'Emails sent successfully.' });
  } catch (error) {
    console.error('Error sending emails:', error);
    res.status(500).json({ error: 'Failed to send emails.' });
  }
});

// Handle root path
app.get('/', (req, res) => {
  res.json({ message: 'Backend API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 