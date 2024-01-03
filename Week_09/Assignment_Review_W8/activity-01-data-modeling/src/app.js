import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes";
import { DB_URL } from "./config/server.config";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.all("*", (req, res, next) => next({ name: "NotFoundError" }));

app.use(errorHandler);

mongoose
  .connect(DB_URL)
  .then((_) => {
    console.log("[Database] Connection established.");
    app.listen(3001, () => console.log("[Server] Now listening on port 3001"));
  })
  .catch((err) => console.log("[Database] Connection failed:", err));

export default app;
