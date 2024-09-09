import mongoose from "mongoose";

async function dbConnect() {
  // Connect to MongoDB database
  try {
    await mongoose.connect(process.env.DATABASE_URL!);
  } catch (err) {
    throw new Error("Could not connect to MongoDB!");
  }
}

export default dbConnect;