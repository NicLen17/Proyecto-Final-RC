const express = require('express');
const router = express.Router();
const {createProduct ,getProduct} = require('../controllers/productosController')
const productosValidation = require('../validations/productosValidation');

// Crear producto
router.post('/', createProduct);
router.get('/' , getProduct);
// router.get('/',getProduct);
// router.put('/', authMiddleware, usuarioController.updateUser);
// productosValidation.createProduct
module.exports = router;