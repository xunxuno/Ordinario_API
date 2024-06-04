const express = require('express');
const app = express();
const routes = require('./routes/usuariosRoute'); // Importa el enrutador correcto
const usuariosController = require('./controllers/usuariosController');
const vuelosController = require('./controllers/vuelosController');
const jwt = require('jsonwebtoken');


//Configura DotEnv
const dotenv = require('dotenv');
dotenv.config();

// Middleware para parsear JSON
app.use(express.json());

// Rutas generales
app.use('/', routes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Ruta para registrar usuario
app.post('/api/registrar', usuariosController.registrarUsuario);

//Ruta para Login
app.post('/api/login', usuariosController.loginUsuario);

//Ruta para vuelos
app.post('/api/registrarVuelo', vuelosController.registrarVuelo);
app.get('/api/historial/:userId', vuelosController.historialVuelos);
app.post('/api/equipaje', vuelosController.registrarEquipaje);
app.get('/api/equipajeHistorial/:vueloId', vuelosController.equipaje);
app.post('/api/registrar-gasto', vuelosController.registrarGastos);
app.get('/api/gastos-historial', vuelosController.gastos);


// Puerto en el que escucha el servidor
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}/`);
});

