import express from "express";
import Contact from "../models/Contact.js";
import process from "process";
import { Resend } from "resend";

const router = express.Router();



router.post("/", async (req, res) => {
    console.log("Contact route hit");
    const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, message } = req.body;

  try {
    // 1️⃣ Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    const data = await resend.emails.send({
      from: "email", // default testing sender
      to: "rwts38549@gmail.com", // change this to your email
      subject: `New Message from ${name}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    

     res.status(200).json({ success: true, data });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
});

export default router;
