const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares');


// ================== Importacion de Controladores ==================
const {subir_publicacion,
    obtener_todas_publicaciones,
    obtener_publicacion_id,
    editar_publicacion,
    borrar_publicacion} = require('../controllers/publicacion_controllers');


// ================== Rutas ==================

// Subir publicacion
router.post('/subir', auth, subir_publicacion);
// Obtener todas las publicaciones
router.get('/todas', obtener_todas_publicaciones);
// Obtener una publicacion por su ID
router.get('/una/:id_publicacion', obtener_publicacion_id);
// Editar publicacion
router.put('/editar/:id_publicacion', editar_publicacion);
// Eliminar publicacion
router.delete('/eliminar/:id_publicacion', borrar_publicacion);



// ================== Exportar funciones ==================
module.exports = router;