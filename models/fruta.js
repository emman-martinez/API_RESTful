// Modelo de la Colección de Frutas de la Base de Datos
'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Crear esquemas de MongoDB (mongoose)

var FrutaSchema = Schema({
    nombre: String,
    color: String,
    temporada: Boolean
});

// Exportar esquema
module.exports = mongoose.model('Fruta', FrutaSchema);