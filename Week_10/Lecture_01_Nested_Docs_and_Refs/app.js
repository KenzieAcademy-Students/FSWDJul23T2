import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { db_uri } from "./config/db.config";
import { green, red, yellow, blueBright } from "chalk";
import { api_domain, api_url, port } from "./config/api.config";
import apiRoutes from "./routes";
import { notFoundErrorHandler, validationErrorHandler } from "./middleware";

mongoose
  .connect(db_uri)
  .then(() => console.log(`${green("[Database]")} Connection established.`))
  .catch((err) =>
    console.log(
      `${red("[Database]")} ${yellow("Connection could not be established:")}`,
      err
    )
  );

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(api_url, apiRoutes);
app.all("*", notFoundErrorHandler);

app.use(validationErrorHandler);

app.listen(port, () =>
  console.log(
    `${green("[Server]")} Now listening at ${blueBright(api_domain)}${yellow(
      process.env.NODE_ENV !== "production" ? port : ""
    )}`
  )
);
