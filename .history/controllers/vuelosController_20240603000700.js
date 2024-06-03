const vuelosService = require('../services/vuelosService');
const autenticador = require('../middlewares/autenticador');
const jwt = require('jsonwebtoken');

async function registrarVuelo(req, res) {
    const {dataViaje} = req.body;
    try {
       /* const userId = autenticador.obtenerUserIdDesdeCookie(req);
        
        if (!userId) {
            return res.status(401).send('No se pudo obtener el ID de usuario desde la cookie');
        }*/
        await vuelosService.registrar(dataViaje.userId, dataViaje.destino, dataViaje.fly, dataViaje.cantidad, dataViaje.flightPrice, dataViaje.date, dataViaje.hotel, dataViaje.noches, dataViaje.hotelPrice);
        res.status(201).send('vuelo registrado correctamente');
    } catch (error) {
        console.error('Error al registrar vuelo:', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = {
    registrarVuelo
};