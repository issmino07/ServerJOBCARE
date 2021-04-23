
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

       estado:String,
       emailOfertante:String,
       urlPdf:String,
       telefono: String,
       nombre:String
})

module.exports = mongoose.model('Postulacion',PostulacionShema); 