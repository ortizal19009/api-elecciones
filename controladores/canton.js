const { conexionDb } = require("../db/conexion");
const getCanton = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM canton");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No hay datos que obtener: ${err}` });
  }
};
const getByIdProvincia = async (req, res) => {
    const db = await conexionDb();
    try {
        const {idprovincia} = req.params;
        const result = await db.query("SELECT * FROM  canton WHERE provincia_idprovincia = ?", idprovincia);
        res.status(200).json(result);

    } catch (error) {
        res
        .status(500)
        .json({ error: `No hay datos que obtener con ese id: ${error}` });
    }
};
module.exports = {
  getCanton,
  getByIdProvincia
};
