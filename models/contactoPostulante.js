
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

})

module.exports = mongoose.model('Contacto',ContactoShema); 