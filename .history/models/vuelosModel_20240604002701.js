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

async function registrarEquipaje(userId, id_vuelo, elemento, cantidad){
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO equipaje (id_usuario, id_vuelo, elemento, cantidad) VALUES (?, ?, ?, ?)', [userId, id_vuelo, elemento, cantidad]);
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

async function obtenerPorIdVuelo(id_vuelo) {
    if (typeof id_vuelo !== 'number' && typeof id_vuelo !== 'string') {
        throw new Error('El id_vuelo debe ser un número o una cadena de texto');
    }

    const conexion = await obtenerConexion();
    try {
        console.log('id_vuelo:', id_vuelo);  // Registro de depuración
        const [vueloResults] = await conexion.query('SELECT * FROM equipaje WHERE id_vuelo = ? ORDER BY id DESC', [id_vuelo]);
        return vueloResults;
    } catch (error) {
        console.error('Error al obtener el equipaje por id de vuelo:', error);
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    registrarVuelo,
    obtenerPorIdUsuario,
    obtenerPorIdVuelo,
    registrarEquipaje
};