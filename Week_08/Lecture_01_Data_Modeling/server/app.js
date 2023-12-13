import express from "express";
import cors from "cors";
import mongoose from "mongoose";

/**
 * How to connect your express application to a MongoDB Database
 */
// Step 1: Get your connection string from MongoDB Atlas
const MONGODB_URI =
  "mongodb+srv://someperson:somepassword@cluster0.zufxdou.mongodb.net/data-model-lecture?retryWrites=true&w=majority";

// Step 2: Pass the connection string into the mongoose.connect() method
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("[Database] Connection successful!"))
  .catch((err) => console.log("[Database] Connection failed:", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, () => console.log("[Server] Listening on port 3001"));
