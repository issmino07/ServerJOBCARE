
const mongoose = require('mongoose');



const PlanesEmpleadosShema = mongoose.Schema({
    
    tipoPlan: String,
    valor: String,
    fechaReporte: { type: Date, required: true, default: Date.now },
    usuario: {
        type: mongoose.Types.ObjectId, ref: 'Usuario'
       },

        //campos adicionales cuando el plan es pago=======
        amount: String,
        clientTransactionId:String,
        optionalParameter1: String,
        optionalParameter2: String,
        reference: String,

})

module.exports = mongoose.model('PlanesEmpleados',PlanesEmpleadosShema);