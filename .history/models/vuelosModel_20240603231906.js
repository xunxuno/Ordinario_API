const { obtenerConexion } = require('../database/conexion');

async function registrarVuelo(userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice){
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO viajes (id_usuario, destino, vuelo, cantidad_boletos, precio_vuelo, fecha_vuelo, hotel, noches_hospedaje, precio_hotel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice]);
        console.log('Viaje insertado correctamente en la base de datos');
    }catch (error) {
        console.error('Error al insertar el viaje en el modelo:', error);
        throw error;
    } finally {
        conexion.release();
    }
}

async function registrarEquipaje(userId, id_vuelo, elemento, cantidad, total){
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO viajes (id_usuario, id_vuelo, elemento, cantidad, total) VALUES (?, ?, ?, ?, ?)', [userId, id_vuelo, elemento, cantidad, total]);
        console.log('Equipaje insertado correctamente en la base de datos');
    }catch (error) {
        console.error('Error al insertar el equipaje en el modelo:', error);
        throw error;
    } finally {
        conexion.release();
    }
}

async function obtenerPorIdUsuario(userId) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM Viajes WHERE id_usuario = ? ORDER BY id DESC', [userId]);
        return results;
    } catch (error) {
        console.error('Error al obtener el viaje por el id', error);
        throw error;
    } finally {
        conexion.release();
    }
}

async function obtenerPorIdVuelo(vueloId){
    const conexion = await obtenerConexion();
    try {
        const [vueloResults] = await conexion.query('SELECT * FROM Viajes WHERE id = ? ORDER BY id DESC', [vueloId]);
        return vueloResults;
    } catch (error) {
        console.error('Error al obtener el viaje por el id', error);
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    registrarVuelo,
    obtenerPorIdUsuario,
    obtenerPorIdVuelo
};