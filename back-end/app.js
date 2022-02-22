const express = require("express");
const cors = require("cors");
const dollsController = require("./dollsController/dollsController");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/dolls", dollsController);

app.get("/", (_, response) => {
  response.status(200).send("Welcome to LOL Dolls World!");
});

app.get("*", (_, response) => {
  response.status(404).send({ error: "Not Available" });
});

module.exports = app;
