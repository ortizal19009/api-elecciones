const { conexionDb } = require("../db/conexion");

const getRecintos = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM recinto");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No hay datos que obtener: ${err}` });
  }
};
const getByIdRecinto = async (req, res) => {
  const db = await conexionDb();
  try {
    const { id } = req.params;
    const result = await db.query(
      "SELECT * FROM recinto WHERE idrecinto = ?",
      id
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const addRecinto = async (req, res) => {
  const db = await conexionDb();
  try {
    const recinto = req.body;
    const result = await db.query("INSERT INTO recinto SET ?", recinto);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No se puede añadir ese recinto: ${err}` });
  }
};
module.exports = {
  getRecintos,
  getByIdRecinto,
  addRecinto,
};
