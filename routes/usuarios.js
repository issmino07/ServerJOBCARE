/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');



const { getUsuarios, crearUsuario, actualizarUsuario, borrarUsuario } = require('../controllers/usuarios');
//const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();


router.get( '/', getUsuarios );

router.post( '/',
    //validarJWT ,
    crearUsuario 
);

router.put( '/:id',
    [
    
    ],
    actualizarUsuario
);

router.delete( '/:id',
  
    borrarUsuario
);



module.exports = router;