import messageModel from "../models/message.model.js";

export const createMessageController = async (req, res) => {
  try {
    let { message, senderId, receiverId } = req.body;
    if (!message || !senderId || !receiverId) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const payload = {
      message,
      senderId,
      receiverId,
    };
    const messageSent = await messageModel.create(payload);
    res.status(201).json({
      message: "Message sent successfully",
      isCreated: true,
      messageSent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllMessagesController = async (req, res) => {
  try {
    let { s, r } = req.query;
    
    const messages = await messageModel.find({
        $or: [
          { senderId: s, receiverId: r },
          { senderId: r, receiverId: s }
        ]
      });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
