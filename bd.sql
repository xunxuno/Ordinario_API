CREATE DATABASE TravelScript;
USE TravelScript;

CREATE TABLE IF NOT EXISTS Usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Viajes (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    destino VARCHAR(30) NOT NULL,
    fly VARCHAR(30) NOT NULL,
    cantidad_boletos INT NOT NULL,
    fecha_vuelo DATE NOT NULL,
    hotel VARCHAR(50) NOT NULL,
    noches_hospedaje INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    INDEX (id_usuario)
);

SELECT * FROM Usuarios ORDER BY id DESC;
