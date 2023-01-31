const { conexionDb } = require("../db/conexion");
const getProvincias = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM provincia");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No hay datos que obtener: ${err}` });
  }
};
const getByIdProvincia = async (req, res) => {
  const db = await conexionDb();
  try {
    const { id } = req.params;
    const result = await db.query(
      "SELECT * FROM provincia WHERE idprovincia = ?",
      id
    );
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${error}` });
  }
};
module.exports = {
  getProvincias,
  getByIdProvincia
};
