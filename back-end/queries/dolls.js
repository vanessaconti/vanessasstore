const db = require("../db/dbConfig");

const getAllDolls = async () => {
  try {
    const allDolls = await db.any("SELECT * FROM dolls");
    return allDolls;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllDolls,
  getDoll,
  createDoll,
  deleteDoll,
  updateDoll,
};
