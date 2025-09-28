import mongoose from "mongoose";

//  Generate a new ObjectId
const randomId = new mongoose.Types.ObjectId();

console.log(randomId.toString()); // e.g., 6515f07bb9a45e3e2e0412ac
