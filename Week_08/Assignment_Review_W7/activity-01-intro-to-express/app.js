import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => res.sendStatus(200));
app.get("/:name", async (req, res) => res.send(`Welcome, ${req.params.name}!`));

app.listen(3001, () =>
  console.log("[Server] Listening for requests at http://localhost:3001")
);
