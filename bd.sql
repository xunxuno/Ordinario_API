CREATE DATABASE TravelScript;
USE TravelScript;

CREATE TABLE IF NOT EXISTS Usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT * FROM Usuarios;

insert into Usuarios (id, nombre, email, password_hash) values ('3','jaja','123','123');