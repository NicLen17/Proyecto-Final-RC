const { check } = require('express-validator');

exports.createMensajes = [
    check('nombreyapellido', 'El nombre y el apellido es obligatorio').not().isEmpty().isLength({ min: 6 , max:35 }),
    check('tel', 'El telefono es obligatorio').not().isEmpty().isNumeric().isLength({min:10 , max:15}),
    check('email', 'El Email es obligatorio').not().isEmpty().isEmail().isLength({ min: 6 , max:35 }),  
    check('mensaje', 'El mensaje es obligatoria y minimo 20 letras').not().isEmpty().isLength({ min: 20 , max:300 }),
        ];