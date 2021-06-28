const { check } = require('express-validator');

exports.createProduct = [
    check('modelo', 'El modelo es obligatorio').not().isEmpty().isLength({max:20}),
    check('marca', 'La marca es obligatorio').not().isEmpty().isLength({max:20}),
    check('price', 'El precio es obligatorio').not().isEmpty().isFloat({min:0}),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('img', 'La imagen es obligatoria').not().isEmpty(),
    check('stock', 'La cantidad es obligatorio!').not().isEmpty().isNumeric({min:0 , max:100}),
    check('color', 'Elija un color').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
    
    ];

exports.updateProduct = [
    check('modelo', 'El modelo es obligatorio').not().isEmpty().isLength({max:20}),
    check('marca', 'La marca es obligatorio').not().isEmpty().isLength({max:20}),
    check('price', 'El precio es obligatorio').not().isEmpty().isFloat({min:0}),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('img', 'La imagen es obligatoria').not().isEmpty(),
    check('stock', 'La cantidad es obligatorio!').not().isEmpty().isNumeric({min:0 , max:100}),
    check('color', 'Elija un color').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').not().isEmpty(),
]