require("dotenv").config();
const mysql = require("promise-mysql");

/*const conexion = mysql.createConnection({
  host: "benandtics.com",
  database: "benandti_elecciones2023",
  user: "benandti_edu23",
  password: "Edu@rd02o23",
});*/
const conexion = mysql.createConnection({
  host:process.env.HOST ,
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASS,
});
const conexionDb = () => {
  return conexion;
};

module.exports = { conexionDb };
