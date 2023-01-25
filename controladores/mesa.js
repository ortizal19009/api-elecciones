const { conexionDb } = require("../db/conexion");
const getMesas = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM mesa");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No hay datos que obtener: ${err}` });
  }
};
const getByIdMesa = async (req, res) => {
  const db = await conexionDb();
  try {
    const { id } = req.params;
    const result = await db.query("SELECT * FROM mesa WHERE idmesa = ?", id);
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const getByGenero = async (req, res) => {
  const db = await conexionDb();
  try {
    const { idgenero } = req.params;
    const result = await db.query(
      "SELECT * FROM mesa WHERE genero_idgenero = ?",
      idgenero
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const getByRecinto = async (req, res) => {
  const db = await conexionDb();
  try {
    const { idrecinto } = req.params;
    const result = await db.query(
      "SELECT * FROM mesa WHERE recinto_idrecinto = ?",
      idrecinto
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
module.exports = {
  getMesas,
  getByIdMesa,
  getByGenero,
  getByRecinto,
};
