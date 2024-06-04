const express = require('express');
const router = express.Router();
const vuelosController = require('../controllers/vuelosController');
const autenticador = require('../middlewares/autenticador');
const { route } = require('./usuariosRoute');

// Ruta para registrar un vuelo
router.post('/registrarVuelo', vuelosController.registrarVuelo);

router.get('/historial/:userId', vuelosController.historialVuelos);

router.post('/equipaje', vuelosController.registrarEquipaje);
router.get('/equipaje/:id_vuelo', vuelosController._obtenerEquipaje);


module.exports = router;