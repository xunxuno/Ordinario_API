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

async function registrarGastos(userId, vueloId, concepto, precio) {
    try {
        await vuelosModel.registrarGastos(userId, vueloId, concepto, precio);
    }catch (error) {
        console.error('Error al registrar el gasto en el servicio:', error);
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

async function obtenerPorId(Id) {
    try {
        const historial = await vuelosModel.obtenerPorId(Id); // Utilizar el modelo para obtener el historial de vuelos por userId
        return historial; // Devolver el historial obtenido
    } catch (error) {
        console.error('Error al obtener el historial de vuelos en el servicio:', error);
        throw error;
    }
}

async function obtenerPorIdVuelo(vueloId) {
    try {
        const equipajeList = await vuelosModel.obtenerPorIdVuelo(vueloId);
        console.log(equipajeList); // Mueve el log aquí
        return equipajeList;
    } catch (error) {
        console.error('Error al obtener el equipaje en el servicio:', error);
        throw error;
    }
}

async function obtenerGastoPorIdVuelo(vueloId) {
    try {
        const gastoList = await vuelosModel.obtenerGastoPorIdVuelo(vueloId);
        console.log(gastoList); // Mueve el log aquí
        return gastoList;
    } catch (error) {
        console.error('Error al obtener el gasto en el servicio:', error);
        throw error;
    }
}

async function registrarActividad(idUbicacion, vueloId) {
    try {
        await vuelosModel.registrarActividad(idUbicacion, vueloId);
    }catch (error) {
        console.error('Error al registrar la actividad en el servicio:', error);
        throw error;
    }
}

async function obtenerActividadPorIdVuelo(vueloId) {
    try {
        const actividadList = await vuelosModel.obtenerActividadPorIdVuelo(vueloId);
        console.log(actividadList); // Mueve el log aquí
        return actividadList;
    } catch (error) {
        console.error('Error al obtener la actividad en el servicio:', error);
        throw error;
    }
}

async function obtenerUbicacionPorHotel(hotel) {
    try {
        const ubiList = await vuelosModel.obtenerUbicacionPorHotel(hotel);
        console.log(ubiList); // Mueve el log aquí
        return ubiList;
    } catch (error) {
        console.error('Error al obtener la ubicacion en el servicio:', error);
        throw error;
    }
}

module.exports = {
    registrar,
    obtenerPorIdUsuario,
    registrarEquipaje,
    obtenerPorIdVuelo,
    registrarGastos,
    obtenerGastoPorIdVuelo,
    registrarActividad,
    obtenerActividadPorIdVuelo,
    obtenerUbicacionPorHotel,
    obtenerPorId
};