// Modelo de la Colección de Videos de la Base de Datos
'use strict'

var mongoose = requiere('mongoose');
var Schema = mongoose.Schema; // Crear esquemas de MongoDB (mongoose)

var VideoSchema = Schema({
    nombre: String,
    profesor: String
});

// Exportar esquema
module.exports = mongoose.model('Video', VideoSchema);