import express from "express";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import cors from "cors";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/users", userRoute);
app.use("/api/messages", messageRoute);


export default app;
