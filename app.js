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
const rutas_comentarios = require('./src/routes/comentarios_routes')


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


// ================== Escucha del puerto (numero de puerto en .evn) ================== 
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
});