
const mongoose = require('mongoose');



const ContactoShema = mongoose.Schema({
    
    postulacion: {
        type: mongoose.Types.ObjectId, ref: 'hojavida'
       },
   
    fechaReporte: { type: Date, required: true, default: Date.now },
    usuario: {
        type: mongoose.Types.ObjectId, ref: 'Usuario'
       },
   
       ofertante:{
        type: mongoose.Types.ObjectId, ref: 'Usuario'
       },

       emailPostulante:String,
       nombre:String,
       telefono:String,
       emailEmpleador:String,
       telefonoPostulante:String
})

module.exports = mongoose.model('Contacto',ContactoShema); 