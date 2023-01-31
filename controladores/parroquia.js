const { conexionDb } = require("../db/conexion");
const getParroquias = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM parroquia");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No hay datos que obtener: ${err}` });
  }
};
const getByIdCanton = async (req, res) => {
  const db = await conexionDb();
  try {
    const { idcanton } = req.params;
    const result = await db.query(
    "SELECT * FROM parroquia WHERE canton_idcanton = ?",
      idcanton
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
module.exports = { getParroquias, getByIdCanton };
