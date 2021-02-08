const mongoose = require('mongoose');



const HojavidaShema = mongoose.Schema({


    nombre: String,
    apellido: String,
    cedula: String,
    refSalarial: String,
    fechaNacimiento: Date,
    edad: String,
    genero:String,
    ocupacion: String,
    descripcion: String,
    categorias: String,
    provincia:String,
    ciudad: String,
    direccion: String,
    direccionMapa: String,
    experiencia:String,
    descripcionExperiencia: String,
    nivelEducacion: String,
    rating: Number,
    estado: String,
    check: Boolean,
     fechaReporte: { type: Date, required: true, default: Date.now },
     usuario: {
     type: mongoose.Types.ObjectId, ref: 'Usuario'
    },

    postulacion:[
        {  user:{type:mongoose.Types.ObjectId, ref: 'Usuario',required: true, unique: true},
         //  descripcion:{type:mongoose.Types.ObjectId, ref: 'hojavida'}  
     
         } 
        ]

});

module.exports = mongoose.model('hojavida', HojavidaShema);