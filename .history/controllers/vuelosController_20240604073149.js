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

async function _obtenerGasto(vueloId) {
    try {
        const gasto = await vuelosService.obtenerGastoPorIdVuelo(vueloId);
        return gasto;
    } catch (error) {
        console.error('Error al obtener el gasto del vuelo:', error);
        throw error;
    }
}

async function gastos(req, res) {
    const vueloId = req.params.vueloId;
    try {
        const historialGastos = await _obtenerGasto(vueloId);
        res.status(200).json(historialGastos);
        console.log('historial de gastos enviado');
    } catch (error) {
        console.error('Error al buscar los gastos:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); // Devolver un error 500 en caso de fallo
    }
}

async function registrarActividad(req,res){
    const {dataActividad} = req.body;
    try {
        await vuelosService.registrarActividad(dataActividad.idUbicacion, dataActividad.vueloId);
        res.status(201).send('Actividad registrada correctamente');
    } catch (error) {
        console.log(dataActividad);
        console.error('Error al registrar Actividad:', error);
        res.status(500).send('Error interno del servidor');
    }
}

async function _obtenerActividad(vueloId) {
    try {
        const actividad = await vuelosService.obtenerActividadPorIdVuelo(vueloId);
        return actividad;
    } catch (error) {
        console.error('Error al obtener la actividad del vuelo:', error);
        throw error;
    }
}

async function actividades(req, res) {
    const vueloId = req.params.vueloId;
    try {
        const historialActividades = await _obtenerActividad(vueloId);
        res.status(200).json(historialActividades);
        console.log('historial de actividades enviado');
    } catch (error) {
        console.error('Error al buscar las actividades:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); // Devolver un error 500 en caso de fallo
    }
}

// prueba de resumen
async function obtenerResumenVuelo(req, res) {
    const vueloId = req.params.vueloId;
    try {
      const vuelo = await _obtenerHistorialVuelos(vueloId);
      const equipaje = await _obtenerEquipaje(vueloId);
      const gastos = await _obtenerGasto(vueloId);
      const actividades = await _obtenerActividad(vueloId);
  
      const resumen = {
        vuelo: vuelo,
        equipaje: equipaje,
        gastos: gastos,
        actividades: actividades
      };
  
      res.status(200).json(resumen);
    } catch (error) {
      throw error;
    }
  }
 
  async function obtenerUbicacionPorHotel(req, res) {
    const ubi = req.params.hotel;
    try {
        const ubilist = await _obtenerUbicacionPorHotel(ubi);
        res.status(200).json(ubilist);
        console.log('Ubicaciones enviado');
    } catch (error) {
        console.error('Error al buscar las Ubicaciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' }); // Devolver un error 500 en caso de fallo
    }
}

  async function _obtenerUbicacionPorHotel(hotel) {
    try {
        const ubi = await vuelosService. obtenerUbicacionPorHotel(hotel);
        return activiubidad;
    } catch (error) {
        console.error('Error al obtener la ubicacion:', error);
        throw error;
    }
}
  

module.exports = {
    registrarVuelo,
    _obtenerHistorialVuelos,
    historialVuelos,
    registrarEquipaje,
    _obtenerEquipaje,
    equipaje,
    registrarGastos,
    _obtenerGasto,
    gastos,
    registrarActividad,
    _obtenerActividad,
    actividades,
    obtenerResumenVuelo,
    _obtenerUbicacionPorHotel,
    obtenerUbicacionPorHotel
};