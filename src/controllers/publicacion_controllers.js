// ================== Importacion de funciones de error o exito ================== 
const {respuesta_exito,
    respuesta_error,
    respuesta_error_servidor} = require('../utils/responses');


// ================== Importacion de modelos ==================
const {crear_publicacion,
    listar_todas_publicaciones,
    listar_publicacion_id,
    actualizar_publicacion,
    eliminar_publicacion} = require('../models/publicacion_model');


// ================== Funciones del controlador ==================

// Subir una publicacion
const subir_publicacion = async (req, res) => {
    try{
        const {titulo, descripcion, ingredientes, preparacion,  archivo, tiempo_preparacion, dificultad} = req.body;
        const id_usuario = req.usuario.id_usuario;

        await crear_publicacion({titulo, descripcion, ingredientes, preparacion,  archivo, tiempo_preparacion, dificultad, id_usuario});

        const data = {titulo, descripcion, ingredientes, preparacion,  archivo, tiempo_preparacion, dificultad, id_usuario}

        return respuesta_exito(res, 'Publicacion subida correctamente', 201, data);

    }
    catch(error){
        return respuesta_error_servidor(res, error, 'No se pudo subir la publicacion');
    }
}


// Listar todas las publicaciones
const obtener_todas_publicaciones = async (req, res) => {
    try{
        const resultados = await listar_todas_publicaciones();

        return respuesta_exito(res, 'Listado de publicaciones', 200, resultados);

    }
    catch(error){
        return respuesta_error_servidor(res, error, 'No se pudo obtener todas las publicaciones');
    }
}


// Listar una publicacion
const obtener_publicacion_id = async (req, res) => {
    try{
        const {id_publicacion} = req.params;

        const resultado = await listar_publicacion_id(id_publicacion);

        if (resultado.length === 0) {
            return respuesta_error(res, 'Esa publicacion no existe', 404);
        }

        return respuesta_exito(res, 'Listado de publicaciones', 200, resultado);
    }
    catch(error){
        return respuesta_error_servidor(res, error, 'No se pudo obtener la publicacion');
    }
}


// Editar una publicacion
const editar_publicacion = async (req, res) => {
    try{
        const {titulo, descripcion, ingredientes, preparacion, archivo, tiempo_preparacion, dificultad} = req.body;
        const {id_publicacion} = req.params;

        await actualizar_publicacion({titulo, descripcion, ingredientes, preparacion, archivo, tiempo_preparacion, dificultad, id_publicacion});

        return respuesta_exito(res, 'Publicacion editada correctamente', 200);
    }
    catch(error){
        return respuesta_error_servidor(res, error, 'No se pudo editar la publicacion');
    }
}

const borrar_publicacion = async (req, res) => {
    try{
        const {id_publicacion} = req.params;

        await eliminar_publicacion(id_publicacion);

        return respuesta_exito(res, 'Publicacion eliminada correctamente', 200);
    }
    catch(error){
        return respuesta_error_servidor(res, error, 'No se pudo eliminar la publicacion');
    }
}



// ================== Exportar funciones ==================
module.exports = {
    subir_publicacion,
    obtener_todas_publicaciones,
    obtener_publicacion_id,
    editar_publicacion,
    borrar_publicacion
}