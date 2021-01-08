var express = require('express');


const Planes = require('../models/planes');

var app = express();


// POST CREAR CLIENTE
const crearPlan = async (req, res) => {
    // Crear un cliente
 try{
    const {  tipoPlan } = req.body;
    const existePlan = await Planes.findOne({ tipoPlan });
    if ( existePlan ) {
        return res.status(400).json({
            ok: false,
            msg: 'Ya esta suscrito a Plan Free'
        });
    
       }
    const planes = new Planes(req.body);

    // GUARDAR UNA OPCION EN MongoDB
  await  planes.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            res.status(500).json({
                msg: err.message
            });
        });
 }catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: 'Error inesperado... revisar logs'
    });
}

};

// todos las opciones
const getPlan = (req, res) => {
    Planes.find({usuario:req.query.usuario_id})
        .then(plan => {
            res.json(plan);
        }).catch(err => {
            res.status(500).send({
                msg: err.message
            });
        });
};




module.exports = {
    crearPlan,
    getPlan
}