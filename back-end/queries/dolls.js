const db = require("../db/dbConfig");

const getAllDolls = async () => {
  try {
    const allDolls = await db.any("SELECT * FROM dolls");

    return allDolls;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getAllDolls,
};
