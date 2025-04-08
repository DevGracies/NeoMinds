import express from "express";
import cors from "cors";
import enrollRoutes from "./routes/enroll.js";
import contactRoute from "./routes/contact.js";
import connectDB from "./db.js";

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/enroll", enrollRoutes);
app.use("/api/contact", contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is live at http://localhost:${PORT}`);
});
