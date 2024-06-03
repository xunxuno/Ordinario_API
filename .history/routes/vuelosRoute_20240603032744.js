const express = require('express');
const router = express.Router();
const vuelosController = require('../controllers/vuelosController');
const autenticador = require('../middlewares/autenticador');

// Ruta para registrar un vuelo
router.post('/registrarVuelo', vuelosController.registrarVuelo);

router.get('/historial/:userId', vuelosController.historialVuelos);


module.exports = router;