import "dotenv/config";
import express from "express";
import cors from "cors";
import { API_URL, MONGODB_URI, PORT } from "./config/keys";
import mongoose from "mongoose";
import apiRouter from "./routes";
import { dbConnectCallback, dbConnectCatch } from "./utils/mongoose.utils";
import { listenCallback } from "./utils/app.utils";
import {
  notFoundErrorHandler,
  unhandledErrorHandler,
  validationErrorHandler,
} from "./middleware/errorHandlers";

mongoose.connect(MONGODB_URI).then(dbConnectCallback).catch(dbConnectCatch);

const app = express();

app.use(cors());
app.use(express.json());

// API_URL by default is "/api"
app.use(API_URL, apiRouter);

app.all("*", (req, res, next) => next({ name: "NotFoundError" }));

app.use(validationErrorHandler);
app.use(notFoundErrorHandler);
app.use(unhandledErrorHandler);

app.listen(PORT, () => listenCallback(PORT));
