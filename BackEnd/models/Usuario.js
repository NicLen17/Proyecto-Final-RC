const mongoose = require('mongoose');
const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true,
    },
    celular: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    registro: {
        type: Date,
        default: Date.now(),
    },
    category: {
        type: String,
    },
    estado: {
        type: String,
    },
});

module.exports = mongoose.model('Usuario', UsuariosSchema);
