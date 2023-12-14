import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";

const MONGODB_URI =
  "mongodb+srv://someperson:somepassword@cluster0.zufxdou.mongodb.net/mongoose-query-lecture?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("[Database] Connection successful!"))
  .catch((err) => console.log("[Database] Connection failed:", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(3001, () => console.log("[Server] Listening on port 3001"));
