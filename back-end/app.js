// DEPENDENCIES
const cors = require("cors");
const express = require("express");

const dollsController = require("./dollsController/dollsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use("/dolls", dollsController);
// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the LOL Doll World!");
});

// EXPORT
module.exports = app;
