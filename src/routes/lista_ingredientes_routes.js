const express = require('express');
const router = express.Router();
const { auth } = require('../middlewares');
const upload = require('../middlewares/upload');


// ================== Importacion de Controladores ==================
const {obtener_todos_ingredientes,
    obtener_id_ingrediente} = require('../controllers/lista_ingredientes_controller');


// ================== Rutas ==================

// Otbener todos los ingredientes de una publicacion
router.get('/todos/:id_publicacion', auth, obtener_todos_ingredientes);
// Obtener un ingrediente por id
router.get('/uno/:id_ingrediente', auth, obtener_id_ingrediente);



// ================== Exportar funciones ==================
module.exports = router;