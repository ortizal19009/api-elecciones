const express = require("express");
const router = express.Router();
const {
  getRecintos,
  getByIdRecinto,
  addRecinto,
} = require("../controladores/recintos");
router.get("/", getRecintos);
router.get("/:id", getByIdRecinto);
router.post("/", addRecinto);

module.exports = router;
