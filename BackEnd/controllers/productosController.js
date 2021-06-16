const { validationResult } = require('express-validator');
const Productos = require('../models/Productos');

exports.createProduct = async (req , res) => {
//  revisamos los errores
 const errores = validationResult(req);
 if (!errores.isEmpty()) {
     return res.status(400).json(errores.array()[0]);
 }
 let { modelo } = req.body;
console.log(req.body);
 try {
    
    let productFound = await Productos.findOne({ modelo });
     console.log(productFound)
     if (productFound) {
         return res.status(400).send({ msg: `Ya existe el producto ${productFound.marca} ${productFound.modelo} `});
     }
     //nuevo producto
     let producto = new Productos(req.body);

     //guardar producto
     await producto.save();
     res.send(producto);
 } catch (error) {
     console.log(error);
     res.status(400).send({ msg: 'Hubo un error al crear el producto' });
 }
}
exports.getProducts = async (req ,res) => {
    try{
     const productos = await Productos.find();
     console.log(productos);
     res.send(productos);
    }catch(error) {
        console.log(error);
     res.status(400).send({ msg: 'Hubo un error al traer los productos' });
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
