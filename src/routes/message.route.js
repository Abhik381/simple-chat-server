import express from "express";
const router = express.Router();
import { createMessageController, getAllMessagesController } from "../controllers/message.controller.js";

router.get("/", (req, res) => {
  res.send("Message route");
});

router.post("/create", createMessageController);
router.get("/all", getAllMessagesController);


export default router;
