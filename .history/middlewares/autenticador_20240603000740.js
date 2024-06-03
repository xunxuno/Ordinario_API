const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

function verificarToken(req, res, next) {
    const tokenHeader = req.headers['authorization'];
    if (!tokenHeader) {
        return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    const token = tokenHeader.split(' ');
    if (token.length !== 2) {
        return res.status(401).json({ mensaje: 'Token malformado' });
    }

    jwt.verify(token[1], process.env.RSA_PRIVATE_KEY, { algorithm: 'RS256' }, (err, usuario) => {
        if (err) {
            return res.status(403).json({ mensaje: 'Token inválido' });
        }
        req.usuario = usuario;
        next();
    });
}

function verificarDatos(dataSegura) {
    console.log("DataSegura recibida:", dataSegura); // Agregar esta línea para depurar
    let partes = dataSegura.split(',');
    let resultado = {};

    partes.forEach((parte, index) => {
        if (parte) { // Verificar si parte no es undefined
            resultado[index === 0 ? 'nombre' : index === 1 && partes.length > 2 ? 'email' : 'password'] = parte;
        }
    });

    return resultado;
}

async function comparePassword(passwordString, bdHash) {
    const compareHashes = await bcrypt.compare(passwordString, bdHash);
    return compareHashes;
}



module.exports = { verificarToken, verificarDatos, comparePassword };
