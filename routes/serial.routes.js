const express = require('express');
const router = express.Router(); // modulo para crear multiples rutas en archivos separados
//const { abrirPuerto } = require('../puerto-serial');
const Puerto = require('../models/puerto');

// ruta para la accion del boton Obtener peso del formulario
router.get('/peso', async (req, res) => {
    const puerto = new Puerto('COM1');
    console.log(await puerto.listarPuertos());
    const peso = await puerto.obtenerPesoIndicador();
    //puerto.obtenerPesoIndicadorFenix();
    res.status(200).json({
        peso
    });
});


module.exports = router;
