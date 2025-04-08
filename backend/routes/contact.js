import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  console.log("📨 New Contact Form Submission:", { name, email, message });

  // 🔐 Setup transporter (Gmail example)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME, // your Gmail
      pass: process.env.EMAIL_PASSWORD, // app password
    },
  });

  // ✉️ Email options
  const mailOptions = {
    from: email,
    to: "graceadegunle16@gmail.com", // <-- put your own email here
    subject: "New Contact Form Submission 🚀",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    res
      .status(500)
      .json({ message: "Failed to send message. Try again later." });
  }
});

export default router;
