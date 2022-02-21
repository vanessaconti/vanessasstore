const express = require("express");
const dolls = express.Router();

const { getAllDolls } = require("../queries/dolls");

dolls.get("/", async (_, response) => {
  console.log("GET request to /dolls");
  const allDolls = await getAllDolls();
  if (!allDolls[0]) {
    response.status(500).json({ error: "server error" });
  } else {
    response.status(200).json(allDolls);
  }
});

module.exports = dolls;
