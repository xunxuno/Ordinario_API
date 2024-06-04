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
    id_vuelo INT NOT NULL,
    FOREIGN KEY (id_ubicacion) REFERENCES ubicaciones(id),
    FOREIGN KEY (id_vuelo) REFERENCES Viajes(id),
    INDEX (id_vuelo)
);

CREATE TABLE IF NOT EXISTS equipaje (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_vuelo INT NOT NULL,
    elemento VARCHAR(100),
    cantidad INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    FOREIGN KEY (id_vuelo) REFERENCES Viajes(id),
    INDEX (id_usuario)
);

CREATE TABLE IF NOT EXISTS gastos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_vuelo INT NOT NULL,
    concepto VARCHAR(100),
    precio INT,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id),
    FOREIGN KEY (id_vuelo) REFERENCES Viajes(id),
    INDEX (id_usuario)
);

-- SELECTS para comprobar registros
SELECT * FROM Usuarios ORDER BY id DESC;
SELECT * FROM Viajes ORDER BY id DESC;
SELECT * FROM actividades;
SELECT * FROM ubicaciones;
SELECT * FROM equipaje;
SELECT * FROM gastos;
SELECT * FROM Viajes WHERE id_usuario  = 1 ORDER BY id DESC;
SELECT * FROM gastos WHERE id_vuelo  = 1 ORDER BY id DESC;
SELECT * FROM actividades WHERE id_vuelo  = 1 ORDER BY id DESC;
SELECT id FROM Viajes WHERE id_vuelo  = 1;
SELECT ubicacion_de_interes, costo_transporte FROM ubicaciones WHERE id = 1;




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


-- fwqw -----------------------------------------------
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Queenstown', 
    'Holiday Inn Queenstown Remarkables Park', 
    'Queenstown Gardens',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Queenstown', 
    'Holiday Inn Queenstown Remarkables Park', 
    'Kiwi Park ',  
    600
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Queenstown', 
    'Holiday Inn Queenstown Remarkables Park',  
    'Skyline ',  
    200
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Queenstown', 
    'Heartland Hotel Queenstown', 
    'Queenstown Gardens',  
    340
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Queenstown', 
    'Heartland Hotel Queenstown', 
    'Kiwi Park',  
    450
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Queenstown', 
    'Heartland Hotel Queenstown', 
    'Skyline ',  
    600
);

-- Barcelona Princess
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Queenstown', 
    'Hurleys of Queenstown', 
    'Queenstown Gardens',  
    300
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Queenstown', 
    'Hurleys of Queenstown', 
    'Kiwi Park', 
    300
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Queenstown', 
    'Hurleys of Queenstown', 
    'Skyline ',  
    500
);

-- Barcelo Sants
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Queenstown', 
    'Rydges Lakeland Resort Queenstown', 
    'Queenstown Gardens',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Queenstown', 
    'Rydges Lakeland Resort Queenstown', 
    'Kiwi Park',  
    350
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Queenstown', 
    'Rydges Lakeland Resort Queenstown', 
    'Skyline', 
    800
);

-- fwqw -----------------------------------------------
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Estambul', 
    'Motto By Mula Hotel', 
    'Santa Sofía',  
    200
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Estambul', 
    'Motto By Mula Hotel', 
    'Mezquita Azul',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Estambul', 
    'Motto By Mula Hotel', 
    'Torre de Gálata',  
    100
);
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Estambul', 
    'The Ritz-Carlton', 
    'Santa Sofía',  
    100
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Estambul', 
    'The Ritz-Carlton', 
    'Mezquita Azul',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Estambul', 
    'The Ritz-Carlton', 
    'Torre de Gálata',  
    600
);

-- Barcelona Princess
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Estambul', 
    'İstiklal hostel istanbul', 
    'Santa Sofía',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Estambul', 
    'İstiklal hostel istanbul', 
    'Mezquita Azul',  
    300
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Estambul', 
    'İstiklal hostel istanbul', 
    'Torre de Gálata',  
    100
);

-- Barcelo Sants
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Estambul', 
    'erciyes suites', 
    'Santa Sofía',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Estambul', 
    'erciyes suites', 
    'Mezquita Azul',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Estambul', 
    'erciyes suites', 
    'Torre de Gálata',  
    400
);


-- París -----------------------------------------------
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'París', 
    'Nouvel Hôtel Eiffel', 
    'Torre Eiffel',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'París', 
    'Nouvel Hôtel Eiffel', 
    'Catedral de Notre Dame',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'París', 
    'Nouvel Hôtel Eiffel', 
    'Arco de Triunfo de París',  
    200
);
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'París', 
    'Atala powered by Sonder', 
    'Torre Eiffel',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'París', 
    'Atala powered by Sonder', 
    'Catedral de Notre Dame',  
    600
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'París', 
    'Atala powered by Sonder', 
    'Arco de Triunfo de París',  
    500
);

-- Barcelona Princess
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'París', 
    'Hotel Armoni Paris', 
    'Torre Eiffel',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'París', 
    'Hotel Armoni Paris', 
    'Catedral de Notre Dame',  
    600
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'París', 
    'Hotel Armoni Paris', 
    'Arco de Triunfo de París',  
    200
);

-- Barcelo Sants
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'París', 
    'Sonder Le Frochot', 
    'Torre Eiffel',  
    200
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'París', 
    'Sonder Le Frochot', 
    'Catedral de Notre Dame',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'París', 
    'Sonder Le Frochot', 
    'Arco de Triunfo de París',  
    200
);

-- San Francisco -----------------------------------------------
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'San Francisco', 
    'Yotel San Francisco', 
    'Golden Gate Bridgel',  
    100
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'San Francisco', 
    'Yotel San Francisco', 
    'Isla de Alcatraz',  
    600
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'San Francisco', 
    'Yotel San Francisco', 
    'Parque del Golden Gate',  
    100
);
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'San Francisco', 
    'Hilton San Francisco Union Square', 
    'Golden Gate Bridge',  
    100
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'San Francisco', 
    'Hilton San Francisco Union Square', 
    'Isla de Alcatraz',  
    900
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'San Francisco', 
    'Hilton San Francisco Union Square', 
    'Parque del Golden Gate',  
    300
);

-- Barcelona Princess
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'San Francisco', 
    'Riu Plaza Fishermans Wharf', 
    'Golden Gate Bridge',  
    300
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'San Francisco', 
    'Riu Plaza Fishermans Wharf', 
    'Isla de Alcatraz',  
    300
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'San Francisco', 
    'Riu Plaza Fishermans Wharf', 
    'Parque del Golden Gate',  
    300
);

-- Barcelo Sants
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'San Francisco', 
    'The St. Regis San Francisco', 
    'Golden Gate Bridge',  
    300
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'San Francisco', 
    'The St. Regis San Francisco', 
    'Isla de Alcatraz',  
    300
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'San Francisco', 
    'The St. Regis San Francisco', 
    'Parque del Golden Gate',  
    300
);
-- Singapur -----------------------------------------------
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Singapur', 
    'Hotel 81 Palace', 
    'Jardines de la Bahía',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Singapur', 
    'Hotel 81 Palace', 
    'Marina Bay Sands',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Singapur', 
    'Hotel 81 Palace', 
    'Jardín Botánico de Singapur',  
    400
);
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Singapur', 
    'The Serangoon House', 
    'Jardines de la Bahía',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Singapur', 
    'The Serangoon House', 
    'Marina Bay Sands',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Singapur', 
    'The Serangoon House', 
    'Jardín Botánico de Singapur',  
    400
);

-- Barcelona Princess
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Singapur', 
    'Hotel Mi Bencoolen', 
    'Jardines de la Bahía',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Singapur', 
    'Hotel Mi Bencoolen', 
    'Marina Bay Sands',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Singapur', 
    'Hotel Mi Bencoolen', 
    'Jardín Botánico de Singapur',  
    400
);

-- Barcelo Sants
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Singapur', 
    'Resorts World Sentosa - Hotel Ora', 
    'Jardines de la Bahía',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Singapur', 
    'Resorts World Sentosa - Hotel Ora', 
    'Marina Bay Sands',  
    400
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Singapur', 
    'Resorts World Sentosa - Hotel Ora', 
    'Jardín Botánico de Singapur',  
    400
);
-- --------------------------------------------------------------------------------------------------------
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Seúl', 
    'Hotel 8 Hours', 
    'Palacio Gyeongbokgung',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Seúl', 
    'Hotel 8 Hours', 
    'Palacio Changdeokgung',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Seúl', 
    'Hotel 8 Hours', 
    'Aldea tradicional de Bukchon Hanok',  
    700
);
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Seúl', 
    'OYO Hostel Myeongdong 5', 
    'Palacio Gyeongbokgung',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Seúl', 
    'OYO Hostel Myeongdong 5', 
    'Palacio Changdeokgung',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Seúl', 
    'OYO Hostel Myeongdong 5', 
    'Aldea tradicional de Bukchon Hanok',  
    700
);

-- Barcelona Princess
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Seúl', 
    'LOTTE City Hotel Gimpo Airport', 
    'Palacio Gyeongbokgung',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Seúl', 
    'LOTTE City Hotel Gimpo Airport', 
    'Palacio Changdeokgung',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Seúl', 
    'LOTTE City Hotel Gimpo Airport', 
    'Aldea tradicional de Bukchon Hanok',  
    700
);

-- Barcelo Sants
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Seúl', 
    'Four Points by Sheraton Josun', 
    'Palacio Gyeongbokgung',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Seúl', 
    'Four Points by Sheraton Josun', 
    'Palacio Changdeokgung',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Seúl', 
    'Four Points by Sheraton Josun', 
    'Aldea tradicional de Bukchon Hanok',  
    700
);
-- --------------------------------------------------------------------------------------------------------
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Kyoto', 
    'KABIN Machi', 
    'Fushimi Inari-taisha',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Kyoto', 
    'KABIN Machi', 
    'Pabellon Dorado',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Kyoto', 
    'KABIN Machi', 
    'Pabellon Dorado',  
    500
);
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Kyoto', 
    'KABIN Machi', 
    'Kiyomizu-dera',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Kyoto', 
    'The OneFive Kyoto Shijo', 
    'Fushimi Inari-taisha',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Kyoto', 
    'The OneFive Kyoto Shijo', 
    'Pabellon Dorado',  
    500
);

-- Barcelona Princess
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Kyoto', 
    'The OneFive Kyoto Shijo', 
    'Kiyomizu-dera',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Kyoto', 
    'Comfort Hotel Kyoto Horikawagojo', 
    'Fushimi Inari-taisha',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Kyoto', 
    'Comfort Hotel Kyoto Horikawagojo', 
    'Pabellon Dorado',  
    500
);

-- Barcelo Sants
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Kyoto', 
    'Comfort Hotel Kyoto Horikawagojo', 
    'Kiyomizu-dera',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Kyoto', 
    'HOTEL MYSTAYS Kyoto Shijo', 
    'Fushimi Inari-taisha',  
    500
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Kyoto', 
    'HOTEL MYSTAYS Kyoto Shijo', 
    'Pabellon Dorado',  
    500
);


-- --------------------------------------------------------------------------------------------------------
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Londres', 
    'YOTEL London ShoreditchS', 
    'Ojo de Londres',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Londres', 
    'YOTEL London ShoreditchS', 
    'Puente de la Torre',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Londres', 
    'YOTEL London ShoreditchS', 
    'Torre de Londres',  
    700
);
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Londres', 
    'Sonder Camden Road', 
    'Ojo de Londres',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Londres', 
    'Sonder Camden Road', 
    'Puente de la Torre',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Londres', 
    'Sonder Camden Road', 
    'Torre de Londres',  
    700
);

-- Barcelona Princess
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Londres', 
    'Central London Luxury Studios', 
    'Ojo de Londres',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Londres', 
    'Central London Luxury Studios', 
    'Puente de la Torre',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Londres', 
    'Central London Luxury Studios', 
    'Torre de Londres',  
    700
);

-- Barcelo Sants
INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,  
    costo_transporte
) VALUES (
    'Londres', 
    'ME London by Melia - Covent Garden', 
    'Ojo de Londres',  
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Londres', 
    'ME London by Melia - Covent Garden', 
    'Puente de la Torre' ,
    700
);

INSERT INTO ubicaciones (
    destino, 
    hotel, 
    ubicacion_de_interes,   
    costo_transporte
) VALUES (
    'Londres', 
    'ME London by Melia - Covent Garden', 
    'Torre de Londres' ,
    700
);
