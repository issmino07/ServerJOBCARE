const { Router } = require('express');

const Planes = require('../controllers/planesEmpleados')

const router = Router();

//informe largo
router.post('/',Planes.crearPlan);
router.post('/pagos',Planes.PlanesPagos);
//router.get('/',ofertasEmpleo.getOferta);
router.get('/',Planes.getPlan);
router.put('/',Planes.actualizarPlan);
//router.delete('/:_id',ofertasEmpleo.eliminarOferta);



module.exports = router;