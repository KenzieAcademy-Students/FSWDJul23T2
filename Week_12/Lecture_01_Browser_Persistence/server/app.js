import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { port, api_url, db_url } from "./config/app.config";
import seedDb from "./seedDb";
import router from "./routes";

mongoose
  .connect(db_url)
  .then(() => {
    console.log("[Database] Connection established");
    seedDb();
  })
  .catch((error) => console.log("[Database] Connection failed: ", error));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api_url, router);

app.listen(port, () => console.log(`[Server] Now listening on port ${port}`));
