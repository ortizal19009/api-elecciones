const { conexionDb } = require("../db/conexion");

const getTipoCandidato = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM tipocandidato ");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      error: `No hay datos que obtener de la tabla tipocandidato: ${error}`,
    });
  }
};
const getByIdTipoCandidato = async (req, res) => {
  const db = await conexionDb();
  try {
    const { id } = req.params;
    const result = await db.query(
      "SELECT * FROM tipocandidato WHERE idtipocandidato = ?",
      id
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: `No hay tipocandidato con ese id: ${err}` });
  }
};
const addTipoCandidato = async (req, res) => {
  const db = await conexionDb();
  try {
    const tipocandidato = req.body;
    const result = await db.query("INSERT INTO tipocandidato SET ?",tipocandidato);
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ error: `No se puede añadir este tipocandidato: ${error}` });
  }
};
module.exports = {
  getTipoCandidato,
  getByIdTipoCandidato,
  addTipoCandidato,
};
