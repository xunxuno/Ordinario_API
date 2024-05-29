const express = require('express');
const router = express.Router();

// Importar rutas específicas
const usuariosRoute = require('./usuariosRoute');


// Rutas específicas para usuarios
router.use('/usuarios', usuariosRoute);

module.exports = router;