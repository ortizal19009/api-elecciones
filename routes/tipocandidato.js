const express = require("express");
const router = express.Router();
const{ getTipoCandidato, getByIdTipoCandidato, addTipoCandidato} = require("../controladores/tipocandidato");
router.get("/",getTipoCandidato);
router.get("/:id",getByIdTipoCandidato);
router.post("/",addTipoCandidato);

module.exports = router