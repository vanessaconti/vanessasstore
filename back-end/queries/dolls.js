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
  const {
    dollscollection,
    dollsname,
    doll_id,
    series,
    price,
    is_featuredrare,
    image,
  } = doll;
  try {
    const newDoll = await db.one(
      "INSERT INTO dolls (dollscollection, dollsname, doll_id, series, price, is_featuredrare, image) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ",
      [
        dollscollection,
        dollsname,
        doll_id,
        series,
        price,
        is_featuredrare,
        image,
      ]
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
    const {
      dollscollection,
      dollsname,
      series,
      doll_id,
      price,
      is_featuredrare,
      image,
    } = doll;
    const updatedDoll = await db.one(
      "UPDATE dolls SET dollsCollection=$2, dollsName=$3, series=$4, price=$5, is_featuredrare=$6, doll_id=$7, image=$8 WHERE id=$1 RETURNING *",
      [
        id,
        dollsCollection,
        dollsName,
        series,
        doll_id,
        price,
        is_featuredRare,
        image,
      ]
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
