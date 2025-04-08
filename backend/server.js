import express from "express";
import cors from "cors";
import enrollRoutes from "./routes/enroll.js";
import contactRoute from "./routes/contact.js";
import connectDB from "./db.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { handleEnrollment } from "./controllers/enrollController.js";
const app = express();

// connectDB();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://graceadegunle16:Grace2019@enroll.8eopver.mongodb.net/?retryWrites=true&w=majority&appName=enroll",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.post("/enroll", handleEnrollment);
app.use("/api/enroll", enrollRoutes);
app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
