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




const postInsert  = (req, res) => {
  if (req.body._id) {
            Ofertas.updateOne({ _id: req.body._id }, {
                
                    $push: {
                     'postulacion': {     
                            user: req.body.user,
                            descripcion: req.body.descripcion
                        }
                    }
                },
               (error) => {
                    if (error) {
                        return res.json({
                            success: false,
                            msj: 'No se pudo agregar el Postulacion',
                            err
                        });
                    } else {
                        return res.json({
                            success: true,
                            msj: 'Se agregó correctamente la Postulacion'
                        });
                    }
                }
            )
        } else {
            return res.json({
                success: false,
                msj: 'No se pudo agregar la postulacion, por favor verifique que el _id sea correcto'
            });
        }

};



// todos las opciones
const getOfertas = (req, res) => {
    Ofertas.find({estado: {$ne: 'NO PUBLICADO' }}).populate('usuario')
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
    Ofertas.find({
        
        usuario:req.query.usuario_id,
      
    
    }).populate(' postulacion.user postulacion.descripcion usuario ')
        .then(oferta => {
            res.status(201).json(oferta);
        }).catch(err => {
            res.status(500).send({
                msg: err.message,

            });
        });
};


//ENCUENTRE UNA OPCION
const getIdOferta =  (req, res) => {
    Ofertas.findById(req.params._id).populate('usuario')
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
  //  crearOfertaId,
  postInsert,
    crearOferta,
    getOferta,
    getIdOferta,
    getOfertas,
    actualizarOferta,
    eliminarOferta,
   
 
}