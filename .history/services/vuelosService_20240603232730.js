const vuelosModel = require('../models/vuelosModel');

async function registrar(userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice){
    try {
        await vuelosModel.registrarVuelo(userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice);
    } catch (error) {
        console.error('Error al registrar vuelo en el servicio:', error);
        throw error;
    }
}

async function registrarEquipaje(userId, id_vuelo, elemento, cantidad){
    try {
        await vuelosModel.registrarEquipaje(userId, id_vuelo, elemento, cantidad);
    }catch (error) {
        console.error('Error al registrar equipaje en el servicio:', error);
        throw error;
    }
}

async function obtenerPorIdUsuario(userId) {
    try {
        const historial = await vuelosModel.obtenerPorIdUsuario(userId); // Utilizar el modelo para obtener el historial de vuelos por userId
        return historial; // Devolver el historial obtenido
    } catch (error) {
        console.error('Error al obtener el historial de vuelos en el servicio:', error);
        throw error;
    }
}

module.exports = {
    registrar,
    obtenerPorIdUsuario,
    registrarEquipaje
};