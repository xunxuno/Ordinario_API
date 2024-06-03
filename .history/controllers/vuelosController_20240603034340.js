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
    const userId = req.params.userId; // Se espera que el userId venga como parámetro en la URL

    try {
        const historial = await _obtenerHistorialVuelos(userId);
        res.status(200).json(historial); // Devolver el historial de vuelos en formato JSON
        console.log('historial enviado');
    } catch (error) {
        console.error('Error al buscar el historial:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); // Devolver un error 500 en caso de fallo
    }
}

async function _obtenerHistorialVuelos(userId) {
    try {
        const historial = await vuelosService.obtenerPorIdUsuario(userId); // Utilizar el servicio para obtener el historial de vuelos
        return historial; // Devolver el historial obtenido
    } catch (error) {
        console.error('Error al obtener el historial de vuelos:', error);
        throw error;
    }
}



module.exports = {
    registrarVuelo,
    _obtenerHistorialVuelos,
    historialVuelos
};