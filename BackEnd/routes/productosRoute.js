const express = require('express');
const router = express.Router();
const {createProduct ,getProducts} = require('../controllers/productosController')
const productosValidation = require('../validations/productosValidation');

// Crear producto
router.post('/', productosValidation.createProduct ,createProduct);
router.get('/' , getProducts);
// router.get('/',getProduct);
// router.put('/', authMiddleware, usuarioController.updateUser);
// productosValidation.createProduct
module.exports = router;