const express = require('express');
const app = express();
const cors = require("cors");
const DIRECTORIO_PERMITIDO_CORS = "http://localhost:4200";
app.use(express.json());
app.use(cors({
    origin: DIRECTORIO_PERMITIDO_CORS
}));
app.set('port',process.env.PORT || 3001)
app.use("/api-elecciones", require("./routes"));
app.listen(app.get('port'),()=>{
    console.log("Servidor runing in the server: ",app.get('port'));
})
//conexion.end();
