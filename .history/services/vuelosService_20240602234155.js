const vuelosModel = require('../models/vuelosModel');

async function registrar(userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice){
    try {
        await vuelosModel.registrarVuelo(userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice);
    } catch (error) {
        console.error('Error al registrar vuelo en el servicio:', error);
        throw error;
    }
}

module.exports = {
    registrar
};