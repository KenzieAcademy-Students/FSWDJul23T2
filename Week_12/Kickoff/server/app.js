import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { api_url, db_url, port } from "./config/app.config";
import router from "./routes";

mongoose
  .connect(db_url)
  .then(() => console.log("[Database] Connection established"))
  .catch((err) => console.log("[Database] Connection failed:", err));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api_url, router);

app.listen(port, () => console.log(`[Server] Now listening on port ${port}`));
