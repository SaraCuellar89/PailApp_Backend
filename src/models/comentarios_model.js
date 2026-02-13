const conexion = require('../config/databse');


// Listar todos los comentarios de una publicacion
const crear_comentario = async(datos) => {
    const {contenido, id_usuario, id_publicacion} = datos;

    await conexion.execute('INSERT INTO comentario (contenido, id_usuario, id_publicacion) VALUES(?, ?, ?)', [contenido, id_usuario, id_publicacion]);
}


// Listar todos los comentarios de una publicacion
const listar_todos_comentarios = async (id_publicacion) => {
    const [resultados] = await conexion.execute('SELECT * FROM comentario WHERE id_publicacion = ?', [id_publicacion]);

    return resultados;
}


// Listar comentario por ID
const listar_comentario_id = async (id_comentario) => {
    const [resultado] = await conexion.execute('SELECT * from comentario WHERE id_comentario = ?', [id_comentario]);

    return resultado;
}


// Actualizar comentario
const actualizar_comentario = async (datos) => {
    const {contenido, id_comentario} = datos;

    await conexion.execute('UPDATE comentario SET contenido = ? WHERE id_comentario = ?', [contenido, id_comentario]);
}


// Eliminar comentario
const eliminar_comentario = async (id_comentario) => {
    const [resultado] = await conexion.execute('DELETE FROM comentario WHERE id_comentario = ?', [id_comentario]);

    return resultado;
}


// ================== Exportar funciones ==================
module.exports = {
    listar_todos_comentarios,
    crear_comentario,
    listar_comentario_id,
    actualizar_comentario,
    eliminar_comentario
}