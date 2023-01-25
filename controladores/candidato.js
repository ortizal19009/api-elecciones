const { conexionDb } = require("../db/conexion");

const getCandidatos = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM candidato");
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener de los candidatos: ${err}` });
  }
};
const getByIdCandidato = async (req, res) => {
  const db = await conexionDb();
  try {
    const { id } = req.params;
    const result = await db.query(
      "SELECT * FROM candidato WHERE idcandidato = ?",
      id
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const getCandidatoByTipo = async (req, res) => {
  const db = await conexionDb();
  try {
    const { tipocandidato } = req.params;
    const result = await db.query(
      "SELECT * FROM candidato WHERE tipocandidato_idtipocandidato = ?",
      tipocandidato
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const addCandidato = async (req, res) => {
  const db = await conexionDb();
  try {
    const candidato = req.body;
    const result = await db.query("INSERT INTO candidato SET ?", candidato);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No se puede añadir ese recinto: ${err}` });
  }
};
module.exports = {
  getCandidatos,
  getByIdCandidato,
  addCandidato,
  getCandidatoByTipo,
};
