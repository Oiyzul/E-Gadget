import mongoose from "mongoose";

// const DATABASE_URL = process.env.DATABASE_URL as string;
// console.log(DATABASE_URL);
// if (!DATABASE_URL) {
//   throw new Error('Environment variable not found.');
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function connectToDatabase() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//       bufferCommands: false,
//       connectTimeoutMS: 30000,
//       socketTimeoutMS: 30000,
//     };

//     cached.promise = mongoose
//       .connect(DATABASE_URL as string, opts)
//       .then((mongoose) => {
//         return mongoose;
//       });
//   }
//   cached.conn = await cached.promise;
//   return cached.conn;
// }

async function dbConnect() {
  // Connect to MongoDB database
  try {
    // await connectToDatabase();
    // console.log(process.env.DATABASE_URL);
    await mongoose.connect(process.env.DATABASE_URL as string);
    // console.log(process.env.DATABASE_URL);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    // throw new Error("Could not connect to MongoDB");
  }
}

export default dbConnect;
