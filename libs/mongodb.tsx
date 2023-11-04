import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined.");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDb;

