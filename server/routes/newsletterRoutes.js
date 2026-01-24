import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// 1. Configure the Transporter
// This setup works for Gmail. Ensure you have your App Password ready.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

// 2. Define the Subscribe Route
router.post('/subscribe', async (req, res) => {
  const { userEmail } = req.body;

  if (!userEmail) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // Send the auto-reply email to the user
    await transporter.sendMail({
      from: `"My Team" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: 'Welcome to PetOn! 🎉',
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h1>Welcome Aboard!</h1>
          <p>Hi there,</p>
          <p>Thanks for subscribing to PetOn.</p>
          <br/>
          <p>Regards,<br/>The PetOn Team</p>
        </div>
      `,
    });

    res.status(200).json({ message: 'Subscription email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

export default router;