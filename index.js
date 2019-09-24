/* Conexión entre NodeJS y MongoDB */
'use strict'

var mongoose = require('mongoose');
var app = require('./app'); // Enlace del Servidor Web (Express)
var port = 3800; // Se establece el número de puerto de la API

// Promesa (then and catch)
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/curso_mongo', { useMongoClient: true })
// mongoose.connect('mongodb://localhost:27017/curso_mongo')
mongoose.connect('mongodb://localhost:27017/curso_mongo', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('!! La conexión a MongoDB se ha realizado correctamente !!');

        app.listen(port, () => { // Conexión al Servidor Web (listen método de express) Correctamente o No
            console.log('El servidor esta corriendo en localhost:3800');
        });
    })
    .catch(err => console.log(err));