// controllers/enrollController.js
import Enrollment from "../models/Enrollment.js";

export const handleEnrollment = async (req, res) => {
  try {
    const {
      parentName,
      email,
      phone,
      childName,
      ageGroup,
      startDate,
      notes,
    } = req.body;

    console.log("📩 Enrollment Data Received:", req.body);

    const newEnrollment = new Enrollment({
      parentName,
      email,
      phone,
      childName,
      ageGroup,
      startDate,
      notes,
    });

    await newEnrollment.save();

    console.log("✅ Enrollment saved to MongoDB!");
    res.status(200).json({ message: "Enrollment successful" });
  } catch (error) {
    console.error("❌ Error saving enrollment:", error);
    res.status(500).json({ message: "Server error during enrollment." });
  }
};
