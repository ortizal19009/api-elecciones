const { conexionDb } = require("../db/conexion");

const getGeneros = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM genero");
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener de generos: ${err}` });
  }
};
const getByIdGeneros = async (req, res) => {
  const db = await conexionDb();
  try {
    const { id } = req.params;
    const result = await db.query(
      "SELECT * FROM genero WHERE idgenero = ?",
      id
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
module.exports = { getGeneros, getByIdGeneros };
