const express = require("express");
const dolls = express.Router();

const {
  getAllDolls,
  getDoll,
  createDoll,
  deleteDoll,
  updateDoll,
} = require("../queries/dolls");

dolls.get("/", async (_, response) => {
  console.log("GET request to /dolls");
  const allDolls = await getAllDolls();
  if (!allDolls[0]) {
    response.status(500).json({ error: "server error" });
  } else {
    response.status(200).json(allDolls);
  }
});
dolls.get("/:id", async (request, response) => {
  console.log("GET request to /dolls/:id");
  const doll = await getDoll(request.params.id);
  console.log(doll);
  if (!doll.id) {
    response.status(500).json({ error: "Doll not listed" });
  } else {
    response.status(200).json(doll);
  }
});

dolls.post("/", async (request, response) => {
  const doll = await createDoll(request.body);
  if (!createDoll) {
    response.status(500).json({ error: "Doll could not be posted" });
  } else {
    response.status(200).json(doll);
  }
});

dolls.delete("/:id", async (request, response) => {
  const deletedDoll = await deleteDoll(request.params.id);
  if (!deletedDoll.id) {
    response.status(404).json({ error: "Doll not listed" });
  } else {
    response.status(200).json(deletedDoll);
  }
});

dolls.put("/:id", async (request, response) => {
  const updatedDoll = await updateDoll(request.params.id, request.body);
  if (updatedDoll) {
    response.status(200).json(updatedDoll);
  } else {
    response.status(500).json({ error: "Doll could not be updated" });
  }
});

module.exports = dolls;
