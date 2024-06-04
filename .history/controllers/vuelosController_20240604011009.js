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


async function registrarEquipaje(req, res){
    const {dataEquipaje} = req.body;
    try {
        await vuelosService.registrarEquipaje(dataEquipaje.userId, dataEquipaje.id_vuelo, dataEquipaje.elemento, dataEquipaje.cantidad);
        res.status(201).send('Equipaje registrado correctamenete');
    } catch (error) {
        console.log(dataEquipaje);
        console.error('Error al registrar equipaje:', error);
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

async function equipaje(req, res) {
    const vueloId = req.params.vueloId;
    try {
        const historialEquipaje = await _obtenerEquipaje(vueloId);
        res.status(200).json(historialEquipaje);
        console.log('equipaje enviado');
    } catch (error) {
        console.error('Error al buscar el equipaje:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); // Devolver un error 500 en caso de fallo
    }
}

async function _obtenerEquipaje(vueloId) {
    try {
        const equipaje = await vuelosService.obtenerPorIdVuelo(vueloId);
        return equipaje;
    } catch (error) {
        console.error('Error al obtener el equipaje del vuelo:', error);
        throw error;
    }
}

async function registrarGastos(req,res){
    const {dataGasto} = req.body;
    try {
        await vuelosService.registrarGastos(dataGasto.userId, dataGasto.vueloId, dataGasto.concepto, dataGasto.precio);
        res.status(201).send('gasto registrado correctamente');
    } catch (error) {
        console.log(dataGasto);
        console.error('Error al registrar gasto:', error);
        res.status(500).send('Error interno del servidor');
    }
}


module.exports = {
    registrarVuelo,
    _obtenerHistorialVuelos,
    historialVuelos,
    registrarEquipaje,
    _obtenerEquipaje,
    equipaje,
    registrarGastos
};