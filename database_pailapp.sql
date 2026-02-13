-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-02-2026 a las 03:54:25
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `database_pailapp`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario`
--

CREATE TABLE `comentario` (
  `id_comentario` int(5) NOT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  `id_usuario` int(5) NOT NULL,
  `id_publicacion` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentario`
--

INSERT INTO `comentario` (`id_comentario`, `contenido`, `fecha_creacion`, `id_usuario`, `id_publicacion`) VALUES
(2, 'hola', '2026-02-13 02:04:59', 3, 1),
(3, 'solo estaño', '2026-02-13 02:06:36', 9, 1),
(4, 'no se', '2026-02-13 02:13:28', 4, 1),
(5, 'no se', '2026-02-13 02:37:13', 4, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `notificacion`
--

CREATE TABLE `notificacion` (
  `id_notificacion` int(5) NOT NULL,
  `tipo` enum('like','comentario') DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  `id_usuario` int(5) NOT NULL,
  `id_emisor` int(5) NOT NULL,
  `id_publicacion` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion`
--

CREATE TABLE `publicacion` (
  `id_publicacion` int(5) NOT NULL,
  `titulo` varchar(100) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `ingredientes` text DEFAULT NULL,
  `preparacion` text DEFAULT NULL,
  `archivo` varchar(255) DEFAULT NULL,
  `tiempo_preparacion` int(5) DEFAULT NULL,
  `dificultad` varchar(20) DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  `id_usuario` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publicacion`
--

INSERT INTO `publicacion` (`id_publicacion`, `titulo`, `descripcion`, `ingredientes`, `preparacion`, `archivo`, `tiempo_preparacion`, `dificultad`, `fecha_creacion`, `id_usuario`) VALUES
(1, '<h1>Bandeja Paisa Tradicional</h1>', '<p>La <strong>bandeja paisa</strong> es uno de los platos más representativos de Colombia, originario de la región <em>antioqueña</em>. Se caracteriza por su abundancia y variedad de ingredientes, siendo un símbolo de la cultura gastronómica del país.</p><p>Este plato es ideal para ocasiones especiales o reuniones familiares debido a su gran porción.</p>', '<ul><li>Frijoles rojos cocidos</li><li>Arroz blanco</li><li>Carne molida sazonada</li><li>Chicharrón crocante</li><li>Chorizo antioqueño</li><li>Huevo frito</li><li>Aguacate en rodajas</li><li>Arepa blanca</li><li>Morcilla</li><li>Plátano maduro frito</li></ul>', '<ol><li>Cocinar los <strong>frijoles</strong> con aliños hasta que estén blandos.</li><li>Preparar el <em>arroz blanco</em> de manera tradicional.</li><li>Sofreír la carne molida con cebolla, tomate y especias.</li><li>Freír el chicharrón hasta que quede crocante.</li><li>Cocinar el chorizo en sartén o parrilla.</li><li>Freír el huevo en aceite caliente.</li><li>Servir todos los ingredientes en una bandeja grande, acompañando con arepa y aguacate.</li></ol>', 'https://misrecetas.com/imagenes/bandeja-paisa.jpg', 90, '<span class=\'badge b', '2026-02-12 23:25:28', 3),
(3, 'Arroz Atollado', '<p>El <strong>arroz atollado</strong> es un plato típico del suroccidente colombiano, especialmente del Valle del Cauca. Se caracteriza por su textura húmeda y cremosa, resultado de la mezcla de arroz con carnes, papas y especias cocidas lentamente.</p>', '<ul><li>2 tazas de arroz</li><li>300 g de pollo en trozos</li><li>200 g de costilla de cerdo</li><li>150 g de chorizo</li><li>2 papas medianas picadas</li><li>1 tomate grande picado</li><li>1 cebolla larga picada</li><li>2 dientes de ajo</li><li>4 tazas de caldo de pollo</li><li>Color o achiote al gusto</li><li>Sal y pimienta</li><li>Cilantro fresco</li></ul>', '<ol><li>Sofríe la cebolla, el tomate, el ajo y el achiote en una olla grande.</li><li>Agrega el pollo, la costilla y el chorizo. Cocina por unos minutos.</li><li>Incorpora las papas y el arroz, mezclando bien con el sofrito.</li><li>Vierte el caldo de pollo y cocina a fuego medio.</li><li>Remueve ocasionalmente hasta que el arroz esté blando y húmedo.</li><li>Ajusta sal y pimienta, y añade cilantro fresco antes de servir.</li></ol>', 'arroz_atollado.jpg', 60, 'Media', '2026-02-13 01:20:30', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicacion_guardada`
--

CREATE TABLE `publicacion_guardada` (
  `id_usuario` int(5) NOT NULL,
  `id_publicacion` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reaccion`
--

CREATE TABLE `reaccion` (
  `id_usuario` int(5) NOT NULL,
  `id_publicacion` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuesta_comentario`
--

CREATE TABLE `respuesta_comentario` (
  `id_respuesta` int(5) NOT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  `id_usuario` int(5) NOT NULL,
  `id_comentario` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(5) NOT NULL,
  `nombre_usuario` varchar(40) DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `contrasena` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `proveedor` enum('local','google') DEFAULT 'local',
  `google_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `nombre_usuario`, `correo`, `contrasena`, `avatar`, `proveedor`, `google_id`) VALUES
(3, 'Elend Venture', 'Elend_Venture@gmail.com', '$2b$10$5.8vkHFpYO567SH4XK3EkOnYl8ovY/YyH3igY9Ag1njbfKBcDUlkK', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTom3WXt5CUzE_XG1ysNyFHjsW-uTUo9CxtHw&s', 'local', NULL),
(4, 'Vin', 'herodelaseras@gmail.com', '$2b$10$7sON0YkreG.kkHKlvShJmuD9uIAgqxc1A.3I6qF.W0KFS2SeIsohq', 'https://i.pinimg.com/736x/b6/8f/43/b68f43f7869a5952ded721e41eebe129.jpg', 'local', NULL),
(7, 'Kelsier', 'kell@gmail.com', '$2b$10$UwTep0l5JkfNPrrnaSVE6OYLCj.prReR62VHtjOZpaues0.LcujrK', NULL, 'local', NULL),
(8, 'Sazed', 'guardador_1@gmail.com', '$2b$10$E3tHARLO1NcMJhqcZmCdqeP.h7pQvQ5UudO6V3oMDerKQIeTeuVtG', NULL, 'local', NULL),
(9, 'Fantasma', 'fantasma@gmail.com', '$2b$10$71iK8E1Id2nQnDU9hAIQDuwWhjngBjto/apIOOqeRMA0FeeNF0JrS', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIfUgVs-NUh8hGyrnv8jYVgmVhxyOzAitYdQ&s', 'local', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `FKcomentario_usuario` (`id_usuario`),
  ADD KEY `FKcomentario_publicacion` (`id_publicacion`);

--
-- Indices de la tabla `notificacion`
--
ALTER TABLE `notificacion`
  ADD PRIMARY KEY (`id_notificacion`),
  ADD KEY `FKnotif_usuario` (`id_usuario`),
  ADD KEY `FKnotif_emisor` (`id_emisor`),
  ADD KEY `FKnotif_publicacion` (`id_publicacion`);

--
-- Indices de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD PRIMARY KEY (`id_publicacion`),
  ADD KEY `FKpublicacion_usuario` (`id_usuario`);

--
-- Indices de la tabla `publicacion_guardada`
--
ALTER TABLE `publicacion_guardada`
  ADD PRIMARY KEY (`id_usuario`,`id_publicacion`),
  ADD KEY `FKguardado_publicacion` (`id_publicacion`);

--
-- Indices de la tabla `reaccion`
--
ALTER TABLE `reaccion`
  ADD PRIMARY KEY (`id_usuario`,`id_publicacion`),
  ADD KEY `FKreaccion_publicacion` (`id_publicacion`);

--
-- Indices de la tabla `respuesta_comentario`
--
ALTER TABLE `respuesta_comentario`
  ADD PRIMARY KEY (`id_respuesta`),
  ADD KEY `FKrespuesta_usuario` (`id_usuario`),
  ADD KEY `FKrespuesta_comentario` (`id_comentario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentario`
--
ALTER TABLE `comentario`
  MODIFY `id_comentario` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `notificacion`
--
ALTER TABLE `notificacion`
  MODIFY `id_notificacion` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `publicacion`
--
ALTER TABLE `publicacion`
  MODIFY `id_publicacion` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `respuesta_comentario`
--
ALTER TABLE `respuesta_comentario`
  MODIFY `id_respuesta` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario`
--
ALTER TABLE `comentario`
  ADD CONSTRAINT `FKcomentario_publicacion` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id_publicacion`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKcomentario_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `notificacion`
--
ALTER TABLE `notificacion`
  ADD CONSTRAINT `FKnotif_emisor` FOREIGN KEY (`id_emisor`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKnotif_publicacion` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id_publicacion`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKnotif_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `publicacion`
--
ALTER TABLE `publicacion`
  ADD CONSTRAINT `FKpublicacion_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `publicacion_guardada`
--
ALTER TABLE `publicacion_guardada`
  ADD CONSTRAINT `FKguardado_publicacion` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id_publicacion`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKguardado_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `reaccion`
--
ALTER TABLE `reaccion`
  ADD CONSTRAINT `FKreaccion_publicacion` FOREIGN KEY (`id_publicacion`) REFERENCES `publicacion` (`id_publicacion`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKreaccion_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;

--
-- Filtros para la tabla `respuesta_comentario`
--
ALTER TABLE `respuesta_comentario`
  ADD CONSTRAINT `FKrespuesta_comentario` FOREIGN KEY (`id_comentario`) REFERENCES `comentario` (`id_comentario`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKrespuesta_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
