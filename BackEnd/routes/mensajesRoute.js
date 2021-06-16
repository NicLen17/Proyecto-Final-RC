const express = require('express');
const router = express.Router();
const {getMensajes, createMensajes} = require('../controllers/mensajesController')
const mensajesValidation = require('../validations/mensajesValidation');

// Crear mensaje
router.post('/', mensajesValidation.createMensajes ,createMensajes);
router.get('/', getMensajes)


module.exports = router;