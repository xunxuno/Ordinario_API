const { obtenerConexion } = require('../database/conexion');

async function registrasVuelo(userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice){
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO viajes (id_usuario, destino, vuelo, cantidad_boletos, precio_vuelo, fecha_vuelo, hotel, noches_hospedaje, precio_hotel VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [userId, destino, fly, cantidad, flightPrice, date, hotel, noches, hotelPrice]);
        console.log('Viaje insertado correctamente en la base de datos');
    }catch (error) {
        console.error('Error al insertar el viaje en el modelo:', error);
        throw error;
    } finally {
        conexion.release();
    }
}