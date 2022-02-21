const express = require("express");
const dolls = express.Router();

const { getAll } = require("../queries/dolls");

dolls.get("/", async (req, res) => {
  try {
    const dolls = await getAll();
    res.send(dolls);
  } catch (error) {
    res.status(404).json({ error: "no data" });
  }
});

module.exports = dolls;
