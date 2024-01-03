import express from "express";
import cors from "cors";
import router from "./routes";
/**
 * To connect to our MongoDB Atlas instance, we need to import
 * mongoose (after installing it, of course).
 */
import mongoose from "mongoose";

/**
 * And then, we call the .connect() method from mongoose
 */
mongoose
  .connect(
    "mongodb+srv://someperson:somepassword@cluster0.vljookl.mongodb.net/mongo-intro?retryWrites=true"
  )
  .then(() => console.log("[Database] Connection established."))
  .catch((err) => console.log("[Database] Connection failed:", err));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(3001, () =>
  console.log("[Server] Now listening for requests at http://localhost:3001")
);
