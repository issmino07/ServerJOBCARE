var express = require('express');


const Ofertas = require('../models/ofertas');

var app = express();


// POST CREAR CLIENTE
const crearOferta = (req, res) => {
    // Crear un cliente
    const ofertas = new Ofertas(req.body);

    // GUARDAR UNA OPCION EN MongoDB
    ofertas.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json({
                msg: err.message
            });
        });
};


// todos las opciones
const getOfertas = (req, res) => {
    Ofertas.find({estado: {$ne: 'NO PUBLICADO' }})
        .then(oferta => {
            res.json(oferta);
        }).catch(err => {
            res.status(500).send({
                msg: err.message
            });
        });
};



// todos las opciones
const getOferta = (req, res) => {
    Ofertas.find({usuario:req.query.usuario_id})
        .then(oferta => {
            res.json(oferta);
        }).catch(err => {
            res.status(500).send({
                msg: err.message
            });
        });
};


//ENCUENTRE UNA OPCION
const getIdOferta =  (req, res) => {
    Ofertas.findById(req.params._id)
        .then(ofertas => {
            if (!ofertas) {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            res.json(ofertas);
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
const actualizarOferta =  (req, res) => {
    //Encuentra un cliente y actualízalo
    Ofertas.findByIdAndUpdate(req.body._id, req.body, { new: true })
        .then(ofertas => {
            if (!ofertas) {
                return res.status(404).json({
                    msg: "Opciones not found with id " + req.params._id
                });
            }
            res.json(ofertas);
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
const eliminarOferta = (req, res) => {
    Ofertas.findByIdAndDelete(req.params._id)
        .then(ofertas => {
            if (!ofertas) {
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

    crearOferta,
    getOferta,
    getIdOferta,
    getOfertas,
    actualizarOferta,
    eliminarOferta,
   
 
}