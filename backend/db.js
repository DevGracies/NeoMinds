import mongoose from "mongoose";

const uri =
  "mongodb+srv://graceadegunle16:Grace2019@enroll.8eopver.mongodb.net/?retryWrites=true&w=majority&appName=enroll";

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process if MongoDB connection fails
  }
};

export default connectDB;
