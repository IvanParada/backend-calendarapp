/* 
Rutas de Usuarios / 
host + /api/events
*/


const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

//Todas tienen que pasar por la validacion del JWT
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos)

//Crear evento
router.post(
    '/',
    [
        check('title', 'El título es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').not().isEmpty(),
        check('end', 'Fecha de fin es obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearEvento)

//Actualizar evento
router.put(
    '/:id',
    [

    ],
    actualizarEvento)

//Borrar evento
router.delete('/:id', eliminarEvento)


module.exports = router;