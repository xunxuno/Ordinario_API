const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rutas para usuarios
// Ruta para registrar un usuario
router.post('/registrar', autenticador.verificarToken, usuariosController.registrarUsuario);

// Ruta para iniciar sesión
router.post('/login', autenticador.verificarToken, usuariosController.loginUsuario);
module.exports = router;
