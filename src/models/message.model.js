import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  messageTime: {
    type: Date,
    default: Date.now,
  },
});

const message = mongoose.model("message", messageSchema);

export default message;