// Controlador para crear métodos que reciban peticiones HTTP
// Acciones: Listar, Guardar Nuevo, Actualizar, Eliminar, Buscar una Ruta etc
'use strict'

// Importar Modelo
var Fruta = require('./../models/fruta');

// ***** Método de prueba *****

// function pruebas(req, res) { // requiere, respuesta
//     res.status(200).send({ // Código 200: conexión correcta
//         menssage: 'Esta ruta es de prueba en mi API RESTful con MongoDB y NodeJS (Con Function Normal)'
//     });
// };

var pruebas = (req, res) => {
    res.status(200).send({ // Código 200: conexión correcta
        message: 'Esta ruta es de prueba en mi API RESTful con MongoDB y NodeJS (Con Arrow Function)'
    });
};

/* ******************** CRUD ******************** */

// Método para guardar frutas (Crear nuevas frutas (CREATE))
var saveFruta = (req, res) => {
    var fruta = new Fruta();

    var params = req.body; // Cuerpo de la respuesta (Post)

    if (params.nombre) {
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;

        fruta.save((err, frutaStored) => { // save: Método de guardado e insert en base de datos
            if (err) {
                res.status(500).send({
                    message: 'Error en el Servidor'
                });
            } else {
                if (frutaStored) {
                    res.status(200).send({
                        fruta: frutaStored
                    });
                } else {
                    res.status(200).send({
                        message: 'No se ha guardado la fruta'
                    });
                }
            }
        });
    } else {
        res.status(200).send({
            message: 'El nombre de la fruta es obligatorio'
        });
    }
}

// Método listado de frutas (Listado de frutas (READ))
var getFrutas = (req, res) => {
    Fruta.find({}).sort({ '_id': -1 }).exec((err, frutas) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el Servidor'
            });
        } else {
            if (frutas) {
                res.status(200).send({
                    frutas
                });
            } else {
                res.status(404).send({
                    message: 'No hay Frutas'
                });
            }
        }
    });
};

// Método listado de fruta por ID en URL (Listado de frutas (READ: Url específico))
var getFruta = (req, res) => {
    var frutaId = req.params.id;

    Fruta.findById(frutaId).exec((err, fruta) => { // Método de mongoose: findById --> find({}) de MongoDB
        if (err) {
            res.status(500).send({
                message: 'Error en el Servidor'
            });
        } else {
            if (fruta) {
                res.status(200).send({
                    fruta
                });
            } else {
                res.status(404).send({
                    message: 'No existe la fruta'
                });
            }
        }
    });
};

// Método para actualizar un Documento de la DB frutas (Actualización de frutas (UPDATE))
var updateFruta = (req, res) => {
    var frutaId = req.params.id;
    //console.log(req.body);
    var update = req.body;

    Fruta.findByIdAndUpdate(frutaId, update, { new: true }, (err, frutaUpdated) => { // Método de mongoose: findByIdAndUpdate --> update({}) de MongoDB
        if (err) {
            res.status(500).send({
                message: 'Error en el Servidor'
            });
        } else {
            if (frutaUpdated) {
                res.status(200).send({
                    fruta: frutaUpdated
                });
            } else {
                res.status(404).send({
                    message: 'No existe la fruta'
                });
            }
        }
    });
};

// Método para Eliminar un Documento de la DB frutas (Eliminar frutas (DELETE))
var deleteFruta = (req, res) => {
    var frutaId = req.params.id;

    Fruta.findByIdAndRemove(frutaId, (err, frutaRemoved) => { // Método de mongoose: findByIdAndDelete --> remove({}) de MongoDB
        if (err) {
            res.status(500).send({
                message: 'Error en el Servidor'
            });
        } else {
            if (frutaRemoved) {
                res.status(200).send({
                    fruta: frutaRemoved
                });
            } else {
                res.status(404).send({
                    message: 'No existe la fruta'
                });
            }
        }
    });
};

module.exports = {
    pruebas,
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
};