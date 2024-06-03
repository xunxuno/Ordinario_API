const usuariosService = require('../services/usuariosService');
const autenticador = require('../middlewares/autenticador');
const jwt = require('jsonwebtoken');


async function registrarUsuario(req, res) {
    const { dataSegura } = req.body;
    try {
        // Verificar que dataSegura contiene las propiedades necesarias
        if (!dataSegura.nombre || !dataSegura.email || !dataSegura.password) {
            throw new Error('Formato de dataSegura incorrecto');
        }

        await usuariosService.registrar(dataSegura.nombre, dataSegura.email, dataSegura.password);
        res.status(201).send('Usuario registrado correctamente');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
}



async function loginUsuario(req, res) {
    const { dataSegura } = req.body;

    try {
        console.log('Intentando obtener usuario por nombre:', dataSegura.nombre);
        const usuario = await _obtenerUsuarioPorNombre(dataSegura.nombre);

        if (!usuario) {
            console.log('Usuario no encontrado');
            return res.status(404).send('Usuario incorrecto');
        }

        console.log('Usuario encontrado:', usuario);

        let validPassword = await autenticador.comparePassword(dataSegura.password, usuario.password_hash);

        if (!validPassword) {
            console.log('Contraseña incorrecta');
            return res.status(404).send('Contraseña incorrecta');
        } else {
            console.log('Contraseña correcta, generando token');
            console.log('JWT_SECRET:', process.env.JWT_SECRET);
            const token = jwt.sign(
                { id: usuario.id, nombre: usuario.nombre },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            console.log('Retornando token y userId:', { token, userId: usuario.id }); // Añadir log
            return res.status(200).json({ token, userId: usuario.id });

        }

    } catch (error) {
        console.error('Error al logear usuario:', error);
        return res.status(500).send('Error interno del servidor');
    }
}



async function _obtenerUsuarioPorNombre(nombre) {
    try {
        const usuario = await usuariosService.obtenerPorNombre(nombre);
        return usuario;
    } catch (error) {
        console.error('Error al obtener usuario por nombre:', error);
        throw error; // Lanzar el error para que pueda ser capturado en loginUsuario
    }
}


module.exports = {
    registrarUsuario,
    loginUsuario
};
