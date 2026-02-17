const conexion = require('../config/databse');

// Crear reaccion
const crear_reaccion = async (datos) => {
    const {id_usuario, id_publicacion} = datos;

    await conexion.execute('INSERT INTO reaccion (id_usuario, id_publicacion) VALUES(?, ?)', [id_usuario, id_publicacion]);
}


// Buscar reaccion
const buscar_reaccion = async (datos) => {
    const {id_usuario, id_publicacion} = datos;

    const [resultado] = await conexion.execute('SELECT * FROM reaccion WHERE id_usuario = ?  AND id_publicacion = ?', [id_usuario, id_publicacion]);

    return resultado;
}


// Quitar reaccion
const  quitar_reaccion = async (datos) => {
    const {id_usuario, id_publicacion} = datos;

    const [resultado] = await conexion.execute('DELETE FROM reaccion WHERE id_usuario = ? AND id_publicacion = ?', [id_usuario, id_publicacion]);

    return resultado;
}



// ================== Exportar funciones ==================
module.exports = {
    crear_reaccion,
    buscar_reaccion,
    quitar_reaccion
}