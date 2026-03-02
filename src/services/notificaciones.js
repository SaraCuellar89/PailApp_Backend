const {crear_noticiacion,
    buscar_notificacion,
    actualizar_notificacion} = require('../models/notificaciones_model');

// Funcion para guardar notificaciones en la bbdd dependiendo de si es like, comentario o guardado
const notificar = async (datos) => {
    const {tipo, id_usuario, id_emisor, id_publicacion} = datos;

    if(id_usuario == id_emisor){
        return;
    }

    if(tipo !== "comentario"){
        const buscar = await buscar_notificacion({tipo, id_emisor, id_publicacion});

        if(buscar.length > 0){
            const id_notificacion = buscar[0].id_notificacion;

            return await actualizar_notificacion({id_notificacion});
        }
    }

    await crear_noticiacion({tipo, id_usuario, id_emisor, id_publicacion});
}

module.exports = {notificar}