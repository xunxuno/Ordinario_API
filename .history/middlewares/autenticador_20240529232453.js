const jwt = require('jsonwebtoken');
const crypto = require('crypto');
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
    if (typeof dataSegura !== 'string') {
        throw new Error('DataSegura no es una cadena');
    }
    
    let partes = dataSegura.split(',');
    let resultado = {};

    partes.forEach((parte, index) => {
        if (parte) { // Verificar si parte no es undefined
            resultado[index === 0 ? 'nombre' : index === 1 && partes.length > 2 ? 'email' : 'password'] = decryptData(parte);
        }
    });

    return resultado;
}




// Función para descifrar datos encriptados
function decryptData(encryptedText) {
    // Verifica si el texto encriptado es indefinido o nulo
    if (!encryptedText) {
        throw new Error('El texto encriptado es indefinido o nulo');
    }

    // Separa las partes del texto encriptado
    const parts = encryptedText.split(':');
    if (parts.length !== 3) {
        throw new Error('El texto encriptado no tiene el formato esperado (iv:authTag:encrypted)');
    }

    const [ivHex, authTagHex, encryptedHex] = parts;

    // Agrega mensajes de depuración
    console.log('ivHex:', ivHex);
    console.log('authTagHex:', authTagHex);
    console.log('encryptedHex:', encryptedHex);

    try {
        // Convierte el IV y AuthTag a buffers
        const iv = Buffer.from(ivHex, 'hex');
        const authTag = Buffer.from(authTagHex, 'hex');

        // Obtiene la clave privada AES del entorno y la convierte en un buffer
        const key = Buffer.from(process.env.AES_PRIVATE_KEY, 'hex');

        // Crea un descifrador usando el algoritmo AES-256-GCM, la clave y el IV
        const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);

        // Establece la AuthTag para verificar la autenticidad del mensaje
        decipher.setAuthTag(authTag);

        // Descifra el texto encriptado y lo convierte a formato UTF-8
        let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
        decrypted += decipher.final('utf8');

        // Devuelve el texto descifrado
        return decrypted;
    } catch (error) {
        console.error('Error al descifrar el texto:', error);
        throw new Error('Error al descifrar el texto');
    }
}

async function comparePassword(passwordString, bdHash) {
    const compareHashes = await bcrypt.compare(passwordString, bdHash);
    return compareHashes;
}


module.exports = { verificarToken, verificarDatos, comparePassword };