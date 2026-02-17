const express = require("express");
const dotenv = require("dotenv");


// ================== Middlewares ==================
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Varibles de entorno
dotenv.config();


// ================== Importacion de Rutas ==================
const rutas_usuario = require("./src/routes/usuarios_routes");
const rutas_publicaciones = require('./src/routes/publicacion_routes');
const rutas_comentarios = require('./src/routes/comentarios_routes');
const rutas_reacciones = require('./src/routes/reacciones_routes');
const rutas_guardados = require('./src/routes/guardados_routes');
const rutas_respuestas = require('./src/routes/respuestas_routes')


// ================== Rutas ==================
// Test
app.get('/', (req, res) => {
    res.send("<h1>Hola desde el Backend</h1>")
})

// Usuarios
app.use('/usuarios', rutas_usuario);
// Publicaciones
app.use('/publicacion', rutas_publicaciones);
// Comentarios
app.use('/comentarios', rutas_comentarios);
// Reacciones
app.use('/reacciones', rutas_reacciones);
// Platos Guardados
app.use('/guardados', rutas_guardados);
// Respuestas a comentarios
app.use('/respuestas', rutas_respuestas);


// ================== Escucha del puerto (numero de puerto en .evn) ================== 
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});