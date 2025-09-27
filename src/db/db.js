import mongoose from "mongoose";
import { config } from "../config/config.js";

// Function to connect to the MongoDB database
export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    console.log("Connected to database");
  } catch (error) {
    throw new Error("Could not connect to database");
  }
};
