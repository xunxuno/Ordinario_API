const vuelosService = require('../services/vuelosService');
const autenticador = require('../middlewares/autenticador');
const jwt = require('jsonwebtoken');

async function registrarVuelo(req, res) {
    const {dataViaje} = req.body;
    try {
        await vuelosService.registrar(dataViaje.userId, dataViaje.destino, dataViaje.fly, dataViaje.cantidad, dataViaje.flightPrice, dataViaje.date, dataViaje.hotel, dataViaje.noches, dataViaje.hotelPrice);
        res.status(201).send('vuelo registrado correctamente');
    } catch (error) {
        console.log(dataViaje);
        console.error('Error al registrar vuelo:', error);
        res.status(500).send('Error interno del servidor');
    }
}

async function historialVuelos(req, res){
    const {dataViaje} = req.body;
    try {
        const historial = await _obtenerPorIdUsuario(dataViaje.userId);
        return historial;
    } catch (error) {
        console.log('Error al buscar el historial:', error);
        return res.status(500).send('Error interno del servidor');
    }
}

async function _obtenerPorIdUsuario(userId) {
    try {
        const vueloUser = await vuelosService.obtenerPorIdUsuario(userId);
        return vueloUser;
    } catch (error) {
        console.log('Error al obtener el vuelo por id:', error);
        throw error;
    }
}

module.exports = {
    registrarVuelo,
    _obtenerPorIdUsuario,
    historialVuelos
};