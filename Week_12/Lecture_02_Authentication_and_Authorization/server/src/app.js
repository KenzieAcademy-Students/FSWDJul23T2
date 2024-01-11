import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { API_URL, DB_URI, PORT } from "./config/keys";
import router from "./routes";

mongoose
  .connect(DB_URI)
  .then(() => console.log("[Database] Connection established"))
  .catch((err) => console.log("[Database] Connection failed:", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(API_URL, router);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(PORT, () =>
  console.log(`[Server] Now listening for requests at http://localhost:${PORT}`)
);
