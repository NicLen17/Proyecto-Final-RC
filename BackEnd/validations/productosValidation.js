const { check } = require('express-validator');

exports.createProduct = [
    check('modelo', 'El modelo es obligatorio').not().isEmpty(),
    check('marca', 'La marca es obligatorio').not().isEmpty(),
    check('price', 'El precio es obligatorio').not().isEmpty().isNumeric(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('img', 'La imagen es obligatoria').not().isEmpty(),
    check('color', 'Elija un color').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    
    ];