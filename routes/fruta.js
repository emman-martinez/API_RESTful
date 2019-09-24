// Rutas de la API
'use strict'

var express = require('express');
var FrutaController = require('./../controllers/fruta');

var api = express.Router(); // Permite crear Rutas (Pasar funciones y parámetros)

// Generar Ruta
api.get('/pruebas', FrutaController.pruebas);
api.get('/fruta/:id', FrutaController.getFruta);
api.post('/fruta', FrutaController.saveFruta); // (C)
api.get('/frutas', FrutaController.getFrutas); // (R)
api.put('/fruta/:id', FrutaController.updateFruta); // (U)
api.delete('/fruta/:id', FrutaController.deleteFruta); // (D)

// Exportar Ruta
module.exports = api;