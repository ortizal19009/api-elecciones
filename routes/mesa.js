const express = require("express");
const router = express.Router();
const {
  getMesas,
  getByIdMesa,
  getByGenero,
  getByRecinto,
} = require("../controladores/mesa");
router.get("/", getMesas);
router.get("/:id", getByIdMesa);
router.get("/genero/:idgenero", getByGenero);
router.get("/recinto/:idrecinto", getByRecinto);

module.exports = router;
