const express = require("express");
const router = express.Router();
const {
    getProvincias,
    getByIdProvincia
} = require("../controladores/provincia")
router.get("/", getProvincias);
router.get("/:id", getByIdProvincia)
module.exports = router;