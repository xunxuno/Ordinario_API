const express = require('express');
const router = express.Router();
const vuelosController = require('../controllers/vuelosController');
const autenticador = require('../middlewares/autenticador');
const { route } = require('./usuariosRoute');

// Ruta para registrar un vuelo
router.post('/registrarVuelo', vuelosController.registrarVuelo);

router.get('/historial/:userId', vuelosController.historialVuelos);

router.post('/equipaje', vuelosController.registrarEquipaje);
router.get('/equipajeHistorial/:id_vuelo', vuelosController._obtenerEquipaje);

router.post('/registrar-gasto', vuelosController.registrarGastos);
router.get('/gastos-historial', vuelosController.gastos);

router.post('/registrar-actividad', vuelosController.registrarActividad);
router.get('/historial-actividad', vuelosController.actividades);

router.get('/ubicaciones', vuelosController.obtenerUbicacionPorHotel);

router.get('/ubicacionesid:id', vuelosController.obtenerUbicacionPorid);

router.get('/resumen/', vuelosController.obtenerResumenVuelo);


module.exports = router;