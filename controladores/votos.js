const { conexionDb } = require("../db/conexion");

const getVotos = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM votos");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No hay datos que obtener: ${err}` });
  }
};
const getByIdVotos = async (req, res) => {
  const db = await conexionDb();
  try {
    const { id } = req.params;
    const result = await db.query(
      "SELECT * FROM votos WHERE idvotos = ?",
      id
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const getByCandidato = async (req, res) => {
  const db = await conexionDb();
  try {
    const { idcandidato } = req.params;
    const result = await db.query(
      "SELECT * FROM votos WHERE candidato_idcandidato = ?",
      idcandidato
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const getByMesa = async (req, res) => {
  const db = await conexionDb();
  try {
    const { idmesa } = req.params;
    const result = await db.query(
      "SELECT * FROM votos WHERE mesa_idmesa = ?",
      idmesa
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const addVotos = async (req, res) => {
  const db = await conexionDb();
  try {
    const voto = req.body;
    const result = await db.query("INSERT INTO votos SET ?", voto);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No se puede añadir ese votos: ${err}` });
  }
};
module.exports = {
  getVotos,
  getByIdVotos,
  addVotos,
  getByMesa,
  getByCandidato
};