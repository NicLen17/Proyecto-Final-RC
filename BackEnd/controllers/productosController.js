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

exports.updateProduct = async (req, res) => {
    try {
        const { body } = req;    
        const updatedProducto = await Productos.findByIdAndUpdate(req.body.id, body, { new: true });
        res.send(updatedProducto);
    } catch (error) {
        res.status(400).send({ msg: 'Hubo un error al actualizar el producto' });
    }
};  

exports.getproduct = async (req , res) =>{
    try{
        const productoEncontrado = await Productos.findById(req.params.id);
        res.json(productoEncontrado);
    }catch (error){
        res.status(400).send({ msg: 'Hubo un error al traer el producto' });
    }
}

exports.removeProduct = async (req , res) => {
          try{
        console.log(req.params.id);
        await Productos.findByIdAndDelete(req.params.id)
        res.send("Producto Eliminado");
    }catch(error) {
        res.status(400).send({ msg: 'Hubo un error al eliminar el producto' });
    }
}
