import app from "./src/app.js";
import { config } from "./src/config/config.js";
import { connectDB } from "./src/db/db.js";

// Connect to the database
connectDB();

// Start the server
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
