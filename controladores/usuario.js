const { conexionDb } = require("../db/conexion");

const getUsuarios = async (req, res) => {
  const db = await conexionDb();
  try {
    const result = await db.query("SELECT * FROM usuario");
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No hay datos que obtener: ${err}` });
  }
};
const getByIdUsuario = async (req, res) => {
  const db = await conexionDb();
  try {
    const { id } = req.params;
    const result = await db.query(
      "SELECT * FROM usuario WHERE idusuario = ?",
      id
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const getByEmail = async (req, res) => {
  const db = await conexionDb();
  try {
    const { email } = req.params;
    const result = await db.query(
      "SELECT * FROM usuario WHERE email = ?",
      email
    );
    res.status(200).json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: `No hay datos que obtener con ese id: ${err}` });
  }
};
const addUsuario = async (req, res) => {
  const db = await conexionDb();
  try {
    const usuario = req.body;
    console.log(usuario);
    const result = await db.query("INSERT INTO usuario SET ?", usuario);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: `No se puede añadir ese usuario: ${err}` });
  }
};
module.exports = {
  getUsuarios,
  getByIdUsuario,
  addUsuario,
  getByEmail
};
