const express = require("express");
const router = express.Router();
const {
    getUsuarios,
    getByIdUsuario,
    addUsuario,
    getByEmail

} = require("../controladores/usuario");
router.get("/", getUsuarios);
router.get("/:id", getByIdUsuario);
router.get("/email/:email", getByEmail);
router.post("/", addUsuario);

module.exports = router;