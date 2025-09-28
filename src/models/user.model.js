import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  number: {
    type: Number,
    required: true,
    trim: true,
    unique: true,
  },
  country: {
    type: String,
    capitalize: true,
    default: "India",
  },
  countryCode: {
    type: String,
    default: "+91",
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  isTyping: {
    type: Boolean,
    default: false,
  },
});

const user = mongoose.model("user", userSchema);
export default user;