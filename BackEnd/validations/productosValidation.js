const { check } = require('express-validator');

exports.createProduct = [
    check('modelo', 'El modelo es obligatorio').not().isEmpty(),
    check('marca', 'La marca es obligatorio').not().isEmpty(),
    check('price', 'El precio es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    ];