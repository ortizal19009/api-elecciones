const express = require('express');
const app = express();
/* const {conexion} = require('./db/conexion') */
app.use(express.json());
app.set('port',process.env.PORT || 3001)
app.use("/api-elecciones", require("./routes"));
app.listen(app.get('port'),()=>{
    console.log("Servidor runing in the server: ",app.get('port'));
})
//conexion.end();
