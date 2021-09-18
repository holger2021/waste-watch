const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
import * as indicadorController from "../controllers/indicador.controller";

router.get('/indicador', ensureAuthenticated, indicadorController.indicador);
router.post('/indicador', ensureAuthenticated, indicadorController.indicadorPost);

router.get('/ingresos/:id', ensureAuthenticated, indicadorController.ingresos);



module.exports = router;

