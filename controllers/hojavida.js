var express = require('express');


const Hojavida = require('../models/hojavida');

var app = express();


// POST CREAR CLIENTE
const crearHoja = (req, res) => {
    // Crear un cliente
    const hoja = new Hojavida(req.body);

    // GUARDAR UNA OPCION EN MongoDB
   hoja.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json({
                msg: err.message
            });
        });
};


// todos las opciones
const getHoja = (req, res) => {
    Hojavida.find({estado: {$ne: 'NO PUBLICADO' }})
        .then(hoja => {
            res.json(hoja);
        }).catch(err => {
            res.status(500).send({
                msg: err.message
            });
        });
};



// todos las opciones
const getHojavida = (req, res) => {
    Hojavida.find({usuario:req.query.usuario_id})
        .then(hoja => {
            res.json(hoja);
        }).catch(err => {
            res.status(500).send({
                msg: err.message
            });
        });
};


//ENCUENTRE UNA OPCION
const getIdHoja =  (req, res) => {
    Hojavida.findById(req.params._id)
        .then(hoja => {
            if (!hoja) {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            res.json(hoja);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            return res.status(500).json({
                msg: "Error retrieving Opciones with id " + req.params._id
            });
        });
};

// ACTUALIZAR OPCION
const actualizarHoja =  (req, res) => {
    //Encuentra un cliente y actualízalo
    Hojavida.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(hoja => {
            if (!hoja) {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            res.json(hoja);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            return res.status(500).json({
                msg: "Error updating opciones with id " + req.params._id
            });
        });
};






//ELIMINAR OPCION
const eliminarHoja = (req, res) => {
    Hojavida.findByIdAndDelete(req.params._id)
        .then(hoja => {
            if (!hoja) {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            res.json({ msg: "Opciones deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            return res.status(500).json({
                msg: "Could not delete opciones with id " + req.params._id
            });
        });
};


module.exports = {

    crearHoja,
    getHoja,
    getIdHoja,
    getHojavida,
    actualizarHoja,
    eliminarHoja,
   
 
}