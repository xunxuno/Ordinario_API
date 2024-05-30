const express = require('express');
const app = express();
const routes = require('./routes/routes');
const dotenv = require('dotenv');
const usuariosController = require('./controllers/usuariosController');

//Configura DotEnv
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

// Ruta para login de usuario
//app.post('/api/login', usuariosController.loginUsuario);

// Ruta de ejemplo
app.get('/api/saludo', (req, res) => {
    res.json({ mensaje: 'Hola desde la API' });
});




// Puerto en el que escucha el servidor
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}/`);
});