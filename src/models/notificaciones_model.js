const conexion = require('../config/databse');


// Crear notificacion
const crear_noticiacion = async (datos) => {
    const {tipo, id_usuario, id_emisor, id_publicacion} = datos;

    await conexion.execute('INSERT INTO notificacion (tipo, id_usuario, id_emisor, id_publicacion) VALUES (?, ?, ?, ?)', [tipo, id_usuario, id_emisor, id_publicacion]);
}


// Obtener notificacion de un usuario por ID
const listar_notificacion_id = async ({id_notificacion}) => {
    const [resultado] = await conexion.execute(`
        SELECT 
            n.*, 
            u_e.nombre_usuario as nombre_emisor,
            u.nombre_usuario as nombre_usuario
        FROM notificacion n
            INNER JOIN usuario u_e ON n.id_emisor = u_e.id_usuario
            INNER JOIN usuario u ON n.id_usuario = u.id_usuario
        WHERE n.id_notificacion = ?
    `, [id_notificacion]);

    return resultado;
}


// Obtener todas las notificaciones de un usuario
const listar_todas_notificaciones = async ({id_usuario}) => {
    const [cantidad_notificaciones] = await conexion.execute('SELECT COUNT(*) as total FROM notificacion WHERE id_usuario = ?', [id_usuario]);

    const [info_notificaciones] = await conexion.execute(`
        SELECT 
            n.*, 
            u_e.nombre_usuario as nombre_emisor,
            u.nombre_usuario as nombre_usuario
        FROM notificacion n
            INNER JOIN usuario u_e ON n.id_emisor = u_e.id_usuario
            INNER JOIN usuario u ON n.id_usuario = u.id_usuario
        WHERE n.id_usuario = ?
    `, [id_usuario]);

    const resultado = {
        cantidad_notificaciones,
        info_notificaciones
    }

    return resultado;
}


// Eliminar una sola notificacion de un usuario
const eliminar_notificacion = async ({id_notificacion}) => {
    const [resultado] = await conexion.execute('DELETE FROM notificacion WHERE id_notificacion = ?', [id_notificacion]);

    return resultado;
}


// Eliminar todas las notificacion de un usuario
const eliminar_todas_notificacion = async ({id_usuario}) => {
    const [resultado] = await conexion.execute('DELETE FROM notificacion WHERE id_usuario = ?', [id_usuario]);

    return resultado;
}



// ================== Exportar funciones ==================
module.exports = {
    crear_noticiacion,
    listar_notificacion_id,
    listar_todas_notificaciones,
    eliminar_notificacion,
    eliminar_todas_notificacion
}