# Ordinario_API
Aqui se encuentra mi proyecto Ordinario el cual consiste en una API.
Para usar este proyecto se necesitan bajar las dendencias con nmp install

    "bcrypt": "^5.1.1", 
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-session": "^1.18.0",
    "jsonwebtoken": "^9.0.2",
    "mysql2": "^3.9.9",
    "nodemon": "^3.1.2"

De igual forma se necesita configurar el archivo .env para usar los procesos.
Tambien se necesita installar nodemon junto a su script.

para que la api funcione correctamente se debera crear la base de datos junto a sus tablas (el archivo es db.sql), tambien se deberan insertar los datos en la tabla de Ubicaciones para el correcto funcionamiente (los script se encuentran de dentro del archivo de la base de datos).

una vez configurado todo ejecuta npm start para inicializar la api (recuerda el script de nodemon.)