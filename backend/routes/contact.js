import express from "express";
import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import process from "process";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1️⃣ Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // 2️⃣ Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // aapka Gmail
        pass: process.env.EMAIL_PASS, // App Password
      },
    });

    // 3️⃣ Email details
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // ✅ Email aapke Gmail me aayega
      subject: `New Contact Form Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    };

    // 4️⃣ Send Email
    await transporter.sendMail(mailOptions);

    // 5️⃣ Response to frontend
    res.status(201).json({ message: "Message saved & email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});

export default router;
