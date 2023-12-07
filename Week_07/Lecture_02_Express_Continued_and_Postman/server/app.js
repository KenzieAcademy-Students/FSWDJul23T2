import express from "express";
import cors from "cors";
import apiRouter from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * To create a nested set of routes that all start with the same
 * url fragment, we can create a router middleware. To use
 * routing middleware, the .use() method should actually accept
 * two arguments instead of one:
 * - URL fragment -> what is the URL fragment that all nested
 *    routes should start with?
 * - Router -> The actual router that will handle those requests
 */
app.use("/api", apiRouter);

app.all("*", (req, res) =>
  res.status(404).json({ message: "Resource not found" })
);

app.listen(3001, () =>
  console.log(
    "[Server] Now listening for HTTP requests. Send requests to http://localhost:3001"
  )
);
