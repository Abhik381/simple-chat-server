import express from "express";
import conversationController from "../controllers/conversation.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Conversation route");
});

router.get("/all/:userId", conversationController);



export default router;
