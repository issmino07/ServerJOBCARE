const { Router } = require('express');

const HojaVida = require('../controllers/hojavida')

const router = Router();

//informe largo
router.post('/',HojaVida.crearHoja);
router.get('/',HojaVida.getHojavida);
router.get('/todos',HojaVida.getHoja);
router.get('/:_id',HojaVida.getIdHoja);
router.put('/',HojaVida.actualizarHoja);
router.delete('/:_id',HojaVida.eliminarHoja);
//archivos



module.exports = router;