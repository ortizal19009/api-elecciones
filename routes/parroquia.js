const express = require("express");
const router = express.Router();
const { getParroquias, getByIdCanton } = require("../controladores/parroquia");
router.get("/", getParroquias);
router.get("/canton/:idcanton", getByIdCanton);
module.exports = router;
