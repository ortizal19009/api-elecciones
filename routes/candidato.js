const express = require("express");
const router = express.Router();
const {
  getCandidatos,
  getByIdCandidato,
  addCandidato,
  getCandidatoByTipo,
} = require("../controladores/candidato");
router.get("/", getCandidatos);
router.get("/:id", getByIdCandidato);
router.get("/tipocandidato/:tipocandidato", getCandidatoByTipo);
router.post("/", addCandidato);

module.exports = router;
