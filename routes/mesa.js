const express = require("express");
const router = express.Router();
const {
  getMesas,
  getByIdMesa,
  getByGenero,
  getByRecinto,
  addMesa
} = require("../controladores/mesa");
router.get("/", getMesas);
router.get("/:id", getByIdMesa);
router.get("/genero/:idgenero", getByGenero);
router.get("/recinto/:idrecinto", getByRecinto);
router.post("/", addMesa);

module.exports = router;
