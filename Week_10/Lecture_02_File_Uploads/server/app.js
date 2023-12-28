import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { PORT, DB_URI } from "./config/keys";
import router from "./routes";
import { validationErrorHandler } from "./middleware/errorHandlers";
import path from "path";
import fileUpload from "express-fileupload";

mongoose
  .connect(DB_URI)
  .then(() => console.log("[Database] Connection established."))
  .catch((err) => console.error("[Database] Connection failed:", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Add the middleware from express-fileupload
app.use(fileUpload());

/**
 * The express.static() middleware accepts a path to the folder we declare
 * as the static directory. This should be an absolute path (i.e. including
 * C:\\Program Files\etc.)
 *
 * We can use the path libary to generate this URL without worrying about
 * the location of this file via the .join() method
 *
 * There is an environment variable called __dirname that will be
 * the full path to this file's directory. We'll join that with
 * the relative path to our static folder
 */
app.use(express.static(path.join(__dirname, "./public")));

app.use("/api", router);

app.use(validationErrorHandler);

const server = app.listen(PORT, () =>
  console.log(`[Server] Now listening at http://localhost:${PORT}`)
);
/**
 * Ignore this bit, I'm testing something.
 */
process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);

function shutDown() {
  server.close(() => process.exit(0));

  setTimeout(() => process.exit(1), 2000);
}
