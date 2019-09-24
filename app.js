/* Creación del Servidor Web Express mediante NodeJS */
'use strict' // Para usar ES6

// Definir variables de librerías
var express = require('express');
var bodyParser = require('body-parser');

// Llamado a express
var app = express(); // Express --> Framework NodeJS para protocolo HTTP

// Cargar Rutas
var frutaRoutes = require('./routes/fruta');

// body-parser (Instrucción que se ejecuta antes de una petición HTTP)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rutas
app.use('/api', frutaRoutes);

// Exportar el llamado Express
module.exports = app;