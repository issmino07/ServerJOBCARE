require('dotenv').config();

const chalk = require('chalk');
const express = require('express');
const cors = require('cors');
var path = require ('path');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );
//app.use(cors({origin: true, credentials:true},{maxHttpHeaderSize:true}))
app.use(express.static(path.join(__dirname,'client')))

// Lectura y parseo del body
app.use( express.json() );

// Base de datos
dbConnection();


// Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );
app.use('/api/localidades', require('./routes/localidades'));


app.listen( process.env.PORT, () => {
    console.log(chalk.bgYellow.black.bold('Servidor funcionando en el puerto :' + process.env.PORT));
});

