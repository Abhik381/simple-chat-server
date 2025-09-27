import express from "express";
const router = express.Router();
import {
  registerController,
  loginController,
  getUsersController,
  getUsersByIdController
} from "../controllers/user.controller.js";

router.get("/", (req, res) => {
  res.send("User route");
});

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/get-user-name/:name", getUsersController);
router.get("/get-user-id/:id", getUsersByIdController);

export default router;
