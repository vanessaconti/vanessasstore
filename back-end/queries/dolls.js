const db = require("../db/dbConfig");

const getAllDolls = async () => {
  try {
    const allDolls = await db.any("SELECT * FROM dolls");
    return allDolls;
  } catch (error) {
    return error;
  }
};
const getDoll = async (id) => {
  try {
    const doll = await db.one("SELECT * FROM dolls WHERE id=$1", id);
    return doll;
  } catch (error) {
    return error;
  }
};

const createDoll = async (doll) => {
  const { dollsCollection, dollsName, series, price, is_featuredRare } = doll;
  try {
    const newDoll = await db.one(
      "INSERT INTO dolls (id, dollsCollection, dollsName, series, price, is_featuredRare) VALUES ($1, $2, $3, $4, $5) RETURNING * ",
      [dollsCollection, dollsName, series, price, is_featuredRare]
    );
    return newDoll;
  } catch (error) {
    return error;
  }
};

const deleteDoll = async (id) => {
  try {
    const deletedDoll = await db.one(
      "DELETE FROM dolls WHERE id=$1 RETURNING *",
      id
    );
    return deletedDoll;
  } catch (error) {
    return error;
  }
};

const updateDoll = async (id, doll) => {
  try {
    const { dollsCollection, dollsName, series, price, is_featuredRare } = doll;
    const updatedDoll = await db.one(
      "UPDATE dolls SET dollsCollection=$2, dollsName=$3, series=$4, price=$5, is_featuredRare=$6 WHERE id=$1 RETURNING *",
      [id, dollsCollection, dollsName, series, price, is_featuredRare]
    );
    return updatedDoll;
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
