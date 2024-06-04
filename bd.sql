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
    vuelo VARCHAR(30) NOT NULL,
    cantidad_boletos INT NOT NULL,
    precio_vuelo INT NOT NULL,
    fecha_vuelo DATE NOT NULL,
    hotel VARCHAR(50) NOT NULL,
    noches_hospedaje INT NOT NULL,
    precio_hotel INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    INDEX (id_usuario)
);

CREATE TABLE IF NOT EXISTS ubicaciones(
	id INT PRIMARY KEY AUTO_INCREMENT,
	destino VARCHAR(30) NOT NULL,
    hotel VARCHAR(50) NOT NULL,
    ubicacion_de_interes VARCHAR (100),
    costo_transporte INT
);

CREATE TABLE IF NOT EXISTS actividades (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_ubicacion INT NOT NULL,
    id_usuario INT NOT NULL,
    id_vuelo INT NOT NULL,
    FOREIGN KEY (id_ubicacion) REFERENCES ubicaciones(id),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    FOREIGN KEY (id_vuelo) REFERENCES Viajes(id),
    INDEX (id_usuario)
);

-- SELECTS para comprobar registros
SELECT * FROM Usuarios ORDER BY id DESC;
SELECT * FROM Viajes ORDER BY id DESC;
SELECT * FROM actividades;
SELECT * FROM ubicaciones;



-- INSERTS DE LA BASE DE DATOS

-- Barcelona Hotel Market
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Barcelona', 
    'Hotel Market', 
    'Catedral de Barcelona',  
    300
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Barcelona', 
    'Hotel Market', 
    'Camp Nou',  
    600
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Barcelona', 
    'Hotel Market', 
    'Basílica de la Sagrada Família',  
    400
);

-- Catalonia Park Guell
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Barcelona', 
    'Catalonia Park Guell', 
    'Catedral de Barcelona',  
    360
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Barcelona', 
    'Catalonia Park Guell', 
    'Camp Nou',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Barcelona', 
    'Catalonia Park Guell', 
    'Basílica de la Sagrada Família',  
    500
);

-- Barcelona Princess
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Barcelona', 
    'Barcelona Princess', 
    'Catedral de Barcelona',  
    200
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Barcelona', 
    'Barcelona Princess', 
    'Camp Nou',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Barcelona', 
    'Barcelona Princess', 
    'Basílica de la Sagrada Família',  
    400
);

-- Barcelo Sants
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Barcelona', 
    'Barcelo Sants', 
    'Catedral de Barcelona',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Barcelona', 
    'Barcelo Sants', 
    'Camp Nou',  
    750
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Barcelona', 
    'Barcelo Sants', 
    'Basílica de la Sagrada Família',  
    800
);