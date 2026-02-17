const conexion = require('../config/databse');


// Crear plato guardado
const crear_plato_guardado = async (datos) => {
    const {id_usuario, id_publicacion} = datos;
    
    await conexion.execute('INSERT INTO publicacion_guardada (id_usuario, id_publicacion) VALUES (?, ?)', [id_usuario, id_publicacion]);
}


// Buscar plato guardado
const buscar_plato_guardado = async (datos) => {
    const {id_usuario, id_publicacion} = datos;
    
    const [resultado] = await conexion.execute('SELECT * FROM publicacion_guardada WHERE id_usuario = ? AND id_publicacion = ?', [id_usuario, id_publicacion]);

    return resultado;
}


// Elimianar plato guardado
const eliminar_plato_guardado = async (datos) => {
    const {id_usuario, id_publicacion} = datos;
    
    const [resultado] = await conexion.execute('DELETE FROM publicacion_guardada WHERE id_usuario = ? AND id_publicacion = ?', [id_usuario, id_publicacion]);

    return resultado;
}

// Listar platos guardados
const listar_platos_guardados = async (id_usuario) => {
    const [total_platos_guardados] = await conexion.execute('SELECT COUNT(*) as total_guardados FROM publicacion_guardada WHERE id_usuario = ?', [id_usuario]);

    const [platos_guardados] = await conexion.execute(`
        SELECT 
        p.id_publicacion        AS publicacion_id,
        p.titulo                AS publicacion_titulo,
        p.descripcion           AS publicacion_descripcion,
        p.ingredientes          AS publicacion_ingredientes,
        p.archivo               AS publicacion_archivo,
        p.fecha_creacion        AS publicacion_fecha,

        u_post.id_usuario       AS autor_post_id,
        u_post.nombre_usuario   AS autor_post_nombre,
        u_post.avatar           AS autor_post_avatar
        FROM publicacion_guardada g
        INNER JOIN publicacion p
        ON g.id_publicacion = p.id_publicacion
        INNER JOIN usuario u_post
        ON p.id_usuario = u_post.id_usuario
        WHERE g.id_usuario = ?    
    `, [id_usuario]);

    const datos = {
        total_platos_guardados,
        platos_guardados
    }

    return datos;
}


// ================== Exportar funciones ==================
module.exports = {
    crear_plato_guardado,
    buscar_plato_guardado,
    eliminar_plato_guardado,
    listar_platos_guardados
}