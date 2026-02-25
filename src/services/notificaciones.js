const {crear_noticiacion} = require('../models/notificaciones_model');

// Funcion para guardar notificaciones en la bbdd dependiendo de si es like, comentario o guardado
const notificar = async (datos) => {
    const {tipo, id_usuario, id_emisor, id_publicacion} = datos;

    if(id_usuario == id_emisor){
        return;
    }

    await crear_noticiacion({tipo, id_usuario, id_emisor, id_publicacion});
}

module.exports = {notificar}