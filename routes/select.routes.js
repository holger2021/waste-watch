const express = require('express');
const router = express.Router(); // modulo para crear multiples rutas en archivos separados
//const { abrirPuerto } = require('../puerto-serial');
const { Productos } = require('../models');

// ruta para la accion del boton Obtener peso del formulario
router.post('/productos-area', async (req, res) => {
    // obtengo el irarea selecionada por el usuario
    const { idArea } = req.body;
    // consulto los productos en la base de datos que pertenezcan al idArea recibido
    const productos = new Productos();
    const respuesta = await productos.productosByIdArea(idArea);

    res.status(200).json(respuesta);

});


module.exports = router;
