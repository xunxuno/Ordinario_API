const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const autenticador = require('../middlewares/autenticador');