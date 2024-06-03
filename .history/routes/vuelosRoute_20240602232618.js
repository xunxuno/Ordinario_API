const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const autenticador = require('../middlewares/autenticador');

// Ruta para registrar un vuelo
router.post('/registrarVuelo', autenticador.verificarToken, usuariosController.registrarUsuario);


module.exports = router;