


const mongoose = require('mongoose');



const PlanesShema = mongoose.Schema({
    
    tipoPlan: String,
    valor: String,
    fechaReporte: { type: Date, required: true, default: Date.now },
    usuario: {
        type: mongoose.Types.ObjectId, ref: 'Usuario'
       },

})

module.exports = mongoose.model('Planes',PlanesShema);