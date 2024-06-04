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

async function registrarGastos(userId, vueloId, concepto, precio) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO gastos (id_usuario, id_vuelo, concepto, precio) VALUES (?, ?, ?, ?)', [userId, vueloId, concepto, precio]);
        console.log('Gasto registrado con exito');
    }catch (error) {
        console.error('Error al insertar el gasto en el modelo:', error);
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
        const [results] = await conexion.query('SELECT * FROM equipaje WHERE id_vuelo  = ? ORDER BY id DESC', [vueloId]);
        console.log(results);
        return results;
    } catch (error) {
        console.error('Error al obtener el viaje por el id', error);
        throw error;
    } finally {
        conexion.release();
    }
}

async function obtenerGastoPorIdVuelo(vueloId){
    const conexion = await obtenerConexion();
    try {
        const [gresults] = await conexion.query('SELECT * FROM gastos WHERE id_vuelo  = ? ORDER BY id DESC', [vueloId]);
        console.log(gresults);
        return gresults;
    } catch (error) {
        console.error('Error al obtener el gasto por el id', error);
        throw error;
    } finally {
        conexion.release();
    }
}

async function registrarActividad(idUbicacion, vueloId){
    const conexion = await obtenerConexion();
    try {
        await conexion.query('INSERT INTO actividades (id_ubicacion, id_vuelo) VALUES (?, ?)', [idUbicacion, vueloId]);
        console.log('Actividad registrada con exito');
    }catch (error) {
        console.error('Error al insertar la actividad en el modelo:', error);
        throw error;
    } finally {
        conexion.release();
    }
}

async function obtenerActividadPorIdVuelo(vueloId){
    const conexion = await obtenerConexion();
    try {
        const [aresults] = await conexion.query('SELECT * FROM actividades WHERE id_vuelo  = ? ORDER BY id DESC', [vueloId]);
        console.log(aresults);
        return aresults;
    } catch (error) {
        console.error('Error al obtener la actividad por el id', error);
        throw error;
    } finally {
        conexion.release();
    }
}



module.exports = {
    registrarVuelo,
    obtenerPorIdUsuario,
    obtenerPorIdVuelo,
    registrarEquipaje,
    registrarGastos,
    obtenerGastoPorIdVuelo,
    registrarActividad,
    obtenerActividadPorIdVuelo
};