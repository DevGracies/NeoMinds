import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill in all fields." });
  }

  console.log("📨 New Contact Form Submission:", { name, email, message });

  // You can integrate Nodemailer or DB here
  res
    .status(200)
    .json({ message: "Thanks for reaching out! We’ll be in touch shortly." });
});

export default router;
