require('dotenv').config();
var bodyParser = require('body-parser');
const chalk = require('chalk');
const express = require('express');
const cors = require('cors');
var path = require ('path');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true } ))
app.use(bodyParser.json({ limit: '50mb', extended: true, parameterLimit: 500000 } ))
//app.use(cors({origin: true, credentials:true},{maxHttpHeaderSize:true}))
app.use(express.static(path.join(__dirname,'client')))

// Lectura y parseo del body
app.use( express.json() );

//verificacion de email 
var senmail = require ('./routes/sedmail');
var userRoutesdocumentos = require ('./routes/user.route');
var verificarRoutes = require('./controllers/verificarEmail');
var loginRoutes = require('./routes/login');
var imagenesRoutes = require('./routes/imagenes');
var uploadRoutes = require('./routes/upload');
var busquedaRoutes = require('./routes/busqueda');

var Cursos = require('./routes/cursos');
var serveIndex = require('serve-index');
app.use(express.static(__dirname + '/'))
app.use('/uploads',serveIndex(__dirname + '/uploads'));
// Base de datos
dbConnection();


// Rutas
app.use('/api', verificarRoutes);
app.use('/api', userRoutesdocumentos)
app.use('/api/login', loginRoutes);
app.use('/api/busqueda', busquedaRoutes);  
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use('/api/resetpassword', require('./routes/authRoutes'));

app.use( '/api/hojavida', require('./routes/hojavida') );
app.use('/api/upload',uploadRoutes); 
app.use('/api/localidades', require('./routes/localidades'));
app.use('/api/categorias', require('./routes/categoria'));  
app.use('/api/ofertas', require('./routes/ofertas'));
app.use('/api/planes', require('./routes/planes'));
app.use('/api/Contacto', require('./routes/contactoPostulante'));
app.use('/api/postulacion', require('./routes/postulacion'));
app.use('/api/cursosComprados', require('./routes/cursosComprados'))
app.use('/api/cursos',Cursos);
app.use('/api/sendmail',senmail);
app.use('/api/planempleados', require('./routes/plnesEmpleados'));
app.use('/api/notification', require('./routes/notification') );
app.use('/api/calificacion', require('./routes/calificacion') );
app.use('/api/img',imagenesRoutes);
app.listen( process.env.PORT, () => {
    console.log(chalk.bgYellow.black.bold('Servidor funcionando en el puerto :' + process.env.PORT));
});

