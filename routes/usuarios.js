/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');

var mdAutenticacion = require('../middlewares/autenticacion');

const { getUsuarios, crearUsuario, actualizarUsuarioPlan, borrarUsuario, actualizarUser } = require('../controllers/usuarios');
//const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();


router.get( '/', getUsuarios );

router.post( '/',
    //validarJWT ,
    crearUsuario 
);

router.put( '/',
    
     //   mdAutenticacion.verificaToken,

    actualizarUser
);
router.put( '/plan',
    
     //   mdAutenticacion.verificaToken,

     actualizarUsuarioPlan
);


router.delete( '/:id',
  
    borrarUsuario
);



module.exports = router;