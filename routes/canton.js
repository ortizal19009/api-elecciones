const express = require("express");
const router = express.Router();
const {
    getCanton,
    getByIdProvincia
}  = require("../controladores/canton");
router.get("/", getCanton);
router.get("/provincia/:idprovincia", getByIdProvincia);
module.exports = router;