const conexion = require('../config/databse')


// Buscar la existencia de un usuario por medio de su correo
const buscar_usuario_correo = async (correo) => {
    const [resultado] = await conexion.execute('SELECT * FROM usuario WHERE correo = ?', [correo]);

    return resultado;
}


// Crear un usuario nuevo
const crear_usuario = async (datos) => {
    const {nombre_usuario, correo, contrasena, avatar} = datos;

    await conexion.execute('INSERT INTO usuario (nombre_usuario, correo, contrasena, avatar) VALUES (?, ?, ?, ?)', [nombre_usuario, correo, contrasena, avatar]);
}


// Obtener usuario por ID
const obtener_usuario_id = async (id_usuario) => {
    const [resultado] = await conexion.execute('SELECT * FROM usuario WHERE id_usuario = ?', [id_usuario]);

    return resultado;
} 


// Editar usuario
const actualizar_usuario = async (datos) => {
    const {id_usuario, nombre_usuario, correo, contrasena, avatar} = datos;

    await conexion.execute('UPDATE usuario SET nombre_usuario = ?, correo = ?, contrasena = ?, avatar = ? WHERE id_usuario = ?', [nombre_usuario, correo, contrasena, avatar, id_usuario]);
}


// Eliminar usuario
const eliminar_usuario = async (id_usuario) => {
    const [resultado] = await conexion.execute('DELETE FROM usuario WHERE id_usuario = ?', [id_usuario]);

    return resultado;
}



// ================== Exportar funciones ==================
module.exports = {
    buscar_usuario_correo,
    crear_usuario,
    obtener_usuario_id,
    actualizar_usuario,
    eliminar_usuario
}