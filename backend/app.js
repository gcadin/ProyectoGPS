const express = require('express');
const app = express();
const cors = require('cors');
const path = require("path");
const port = process.env.PORT || 3000; 
const usuarioRoutes = require("./src/routes/usuario");
const denunciaRoutes = require("./src/routes/denuncia");
const mascotaRoutes = require("./src/routes/mascota");
const consejoRoutes = require("./src/routes/consejo");



app.use(cors());

//middlewares
require('./config');
app.use('/uploads', express.static(path.join(__dirname, 'src', 'uploads')));

//agrgar api
app.use('/api', usuarioRoutes);
app.use('/api', denunciaRoutes);
app.use('/api', mascotaRoutes);
app.use('/api', consejoRoutes);


app.listen(port,()=>{
    console.log("server running on port",port);
});

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

