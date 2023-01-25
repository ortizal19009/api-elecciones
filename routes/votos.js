const express = require("express");
const router = express.Router();
const {
    getVotos,
    getByIdVotos,
    addVotos,
    getByMesa,
    getByCandidato
} = require("../controladores/votos");
router.get("/", getVotos);
router.get("/:id", getByIdVotos);
router.get("/mesa/:idmesa", getByMesa);
router.get("/candidato/:idcandidato", getByCandidato);
router.post("/", addVotos);

module.exports = router;