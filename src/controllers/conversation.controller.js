import conversationModel from "../models/conversation.model.js";

const conversationController = async (req, res) => {
  try {
    let { userId } = req.params;
    console.log(userId);

    if (!userId) {
      return res.status(400).json({ message: "User id is required" });
    }
    const conversation = await conversationModel.find({
      $or: [{ senderId: userId }, { receiverId: userId }],
    }).select("-__v");
    res.status(200).json({ conversation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default conversationController;
