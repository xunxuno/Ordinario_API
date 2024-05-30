const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const autenticador = require('../middlewares/autenticador');

// Rutas para usuarios
// Ruta para registrar un usuario
router.post('/registrar', autenticador.verificarToken, usuariosController.registrarUsuario);

// Ruta para iniciar sesión
router.post('/login', autenticador.verificarToken, usuariosController.loginUsuario);
module.exports = router;
