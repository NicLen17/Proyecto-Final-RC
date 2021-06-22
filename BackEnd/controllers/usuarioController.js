const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');

exports.crearUsuario = async (req, res) => {
    // revisamos los errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json(errores.array()[0]);
    }

    let { email, password } = req.body;
    console.log('🚀 ~ file: usuarioController.js ~ line 13 ~ exports.crearUsuario= ~ req.body', req.body);

    try {
        console.log('estoy en crearUsuario', req.body);
        let usuarioEncontrado = await Usuario.findOne({ email });

        if (usuarioEncontrado) {
            return res.status(400).send({ msg: 'Email ya esta en uso' });
        }

        //nuevo usuario
        let usuario = new Usuario(req.body);

        //hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        //guardar usuario
        await usuario.save();
        res.send(usuario);
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: 'Hubo un error al crear el Usuario' });
    }
};

exports.obtenerUsuarios = async (req, res) => {
    console.log('funcion obtener usuarios');
    try {
        const users = await Usuario.find();
        // await Usuario.send({ nombre });
        // console.log('🚀 ~ file: usuarioController.js ~ line 43 ~ exports.getUsers= ~ users', users);
        res.send(users);
    } catch (error) {
        res.status(400).json({ msg: 'error al obtener el usuarios' });
        console.log('🚀 - error', error);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { usuario, body } = req;
        const updatedUser = await Usuario.findByIdAndUpdate(usuario.id, body, { new: true });
        res.send(updatedUser);
    } catch (error) {
        res.status(400).send({ msg: 'Hubo un error al actualizar el Usuario' });
    }
};

exports.stateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const usuario = await Usuario.findById(userId).select('-password -__v');
        console.log(
            '🚀 ~ file: usuarioController.js ~ line 67 ~ exports.stateUser= ~ usuario.estado',
            usuario.estado
        );
        if (usuario.estado) {
            req.body.estado = 'false';
        } else {
            req.body.estado = 'true';
        }

        const updatedUser = await Usuario.findByIdAndUpdate(userId, req.body, { new: true });
        res.send(stateUser);
    } catch (error) {
        res.status(400).send({ msg: 'Hubo un error al actualizar el Usuario' });
    }
};

exports.getUser = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.usuario.id).select('-password -__v'); //en el select se pone con signo - los atributos que no debe traer

        res.send(usuario);
    } catch (error) {
        res.status(400).send({ msg: 'Hubo un error al obtener el usuario' });
    }
};
