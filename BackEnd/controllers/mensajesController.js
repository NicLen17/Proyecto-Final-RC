const { validationResult } = require('express-validator');
const Mensajes = require('../models/Mensajes');

exports.createMensajes = async (req , res) => {
//  revisamos los errores
 const errores = validationResult(req);
 if (!errores.isEmpty()) {
     return res.status(400).json(errores.array()[0]);
 }
 try {
     //nuevo mensaje
     let mensaje = new Mensajes(req.body);
     //guardar producto
     await mensaje.save();
     res.send(mensaje);
 } catch (error) {
     console.log(error);
     res.status(400).send({ msg: 'Hubo un error al mandar el mje' });
 }
}

exports.getMensajes = async (req ,res) => {
   
    try{
     const mensajes = await Mensajes.find();
     res.send(mensajes);
    }catch(error) {
        console.log(error);
     res.status(400).send({ msg: 'Hubo un error al traer los mensajes' });
    }
}

// exports.updateUser = async (req, res) => {
//     try {
//         const { producto, body } = req;
//         const updatedUser = await Usuario.findByIdAndUpdate(producto.id, body, { new: true });
//         res.send(updatedUser);
//     } catch (error) {
//         res.status(400).send({ msg: 'Hubo un error al actualizar el Usuario' });
//     }
// };
