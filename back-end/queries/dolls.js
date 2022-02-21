const db = require("../db/dbConfig");

const getAll = async () => {
  try {
    const allDays = await db.any("SELECT * FROM dolls");

    return allDays;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getAll,
};
