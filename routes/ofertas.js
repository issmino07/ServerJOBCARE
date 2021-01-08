const { Router } = require('express');

const ofertasEmpleo = require('../controllers/ofertas')

const router = Router();

//informe largo
router.post('/',ofertasEmpleo.crearOferta);
router.get('/',ofertasEmpleo.getOferta);
router.get('/todos',ofertasEmpleo.getOfertas);
router.get('/:_id',ofertasEmpleo.getIdOferta);
router.put('/',ofertasEmpleo.actualizarOferta);
router.delete('/:_id',ofertasEmpleo.eliminarOferta);
//archivos



module.exports = router;
