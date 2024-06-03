const vuelosModel = require('../models/vuelosModel');

async function registrar(userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice){
    try {
        await vuelosModel.registrarVuelo(userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice);
    } catch (error) {
        console.error('Error al registrar vuelo en el servicio:', error);
        throw error;
    }
}

async function obtenerPorIdUsuario(userId) {
    try {
        return await vuelosModel.obtenerPorIdUsuario(userId);
    } catch (error) {
        console.error('Error al obtener el vuelo por id en el servicio:', error);
        throw error;
    }
}

module.exports = {
    registrar,
    obtenerPorIdUsuario
};