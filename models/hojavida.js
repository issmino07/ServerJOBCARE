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
     fechaReporte: { type: Date, required: true, default: Date.now },
     usuario: {
     type: mongoose.Types.ObjectId, ref: 'Usuario'
    },

});

module.exports = mongoose.model('hojavida', HojavidaShema);