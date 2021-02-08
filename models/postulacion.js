
const mongoose = require('mongoose');



const PostulacionShema = mongoose.Schema({
    
    postulacion: {
        type: mongoose.Types.ObjectId, ref: 'Ofertas'
       },
   
    fechaReporte: { type: Date, required: true, default: Date.now },
    usuario: {
        type: mongoose.Types.ObjectId, ref: 'Usuario'
       },
   
       ofertante:{
        type: mongoose.Types.ObjectId, ref: 'Usuario'
       },

})

module.exports = mongoose.model('Postulacion',PostulacionShema); 