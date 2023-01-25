const express = require("express");
const router = express.Router();
const { getGeneros,getByIdGeneros } = require("../controladores/genero");
router.get("/", getGeneros);
router.get("/:id", getByIdGeneros);
module.exports = router;
