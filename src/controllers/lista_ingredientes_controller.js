// ================== Importacion de funciones de error o exito ================== 
const {respuesta_exito,
    respuesta_error,
    respuesta_error_servidor} = require('../utils/responses');


// ================== Importacion de modelos ==================
const {insertar_ingredientes, 
    listar_todos_ingredientes,
    lista_ingrediente_id,
    editar_estado_ingrediente,
    editar_ingrediente,
    eliminar_ingrediente} = require('../models/lista_ingredientes_model');


// ================== Funciones del controlador ==================

// Obtener todos los ingredientes
const obtener_todos_ingredientes = async (req, res) => {
    try {
        const {id_publicacion} = req.params;
        const id_usuario = req.usuario.id_usuario;
        
        const ingredientes = await listar_todos_ingredientes({id_usuario, id_publicacion});

        return respuesta_exito(res, 'Lista de ingredientes', 200, ingredientes);
    } catch (error) {
        return respuesta_error_servidor(res, error, "No se pudo obtener los ingredientes");
    }
}


// Obtener un ingrediente
const obtener_id_ingrediente = async (req, res) => {
    try {
        const {id_ingrediente} = req.params;

        const ingrediente = await lista_ingrediente_id({id_ingrediente});

        return respuesta_exito(res, "Ingrediente", 200, ingrediente);
    } catch (error) {
        return respuesta_error_servidor(res, error, "No se pudo obtener el ingredeinte ");
    }
}







// ================== Exportar funciones ==================
module.exports = {
    obtener_todos_ingredientes,
    obtener_id_ingrediente
}