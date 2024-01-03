import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import keys from "./config/keys";
import router from "./routes";
import path from "path";
import fileUpload from "express-fileupload";

mongoose
  .connect(keys.database.url)
  .then(() => console.log("[Database] Connection established!"))
  .catch((err) => console.log("[Database] Connection failed:", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.use(express.static(path.join(__dirname, "public")));

app.use(keys.app.apiUrl, router);

app.listen(keys.app.port, () =>
  console.log(
    `[Server] Listening for requests at http://localhost:${keys.app.port}`
  )
);
