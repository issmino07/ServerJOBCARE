
const mongoose = require('mongoose');



const OfertasShema = mongoose.Schema({


 tituloEmpleo: String,
 descripcionEmpleo: String,
 valor:Number,
 horario:String,
 remuneracion: String,
 direccion:String,
 estado: String,
 tipoPlan: String,
 categorias: String,
 provincia: {   type: String },

 ciudad: { type: String },
 fechaReporte: { type: Date, required: true, default: Date.now },
 usuario: {
     type: mongoose.Types.ObjectId, ref: 'Usuario'
    },

});

module.exports = mongoose.model('ofertas', OfertasShema);