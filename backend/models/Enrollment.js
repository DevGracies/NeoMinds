// models/Enrollment.js
import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  parentName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  childName: { type: String, required: true },
  ageGroup: { type: String, required: true },
  startDate: { type: Date },
  notes: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Enrollment", EnrollmentSchema);
