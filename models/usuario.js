
const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({

    usuario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },
  
    ninos: {
        type: Array
       
    },

  
 telefono: {
     type: String
 },

 clave:{

    type:String
 },

 provincia:{

    type:String
 },

 ciudad:{

    type:String
 },
 direccion:{

    type:String
 },

 direccionmapa:{

    type:String
 },
  
 lavado:{

    type:Boolean
 },
 comida:{

    type:Boolean
 },

 limpieza:{

    type:Boolean
 },
 tareas:{

    type:Boolean
 },

 fecha:{

    type:String
 },

 experiencia:{

    type:String
 },


 
 

  
 
});


/* UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})  */



module.exports = mongoose.model( 'Usuario', UsuarioSchema );
