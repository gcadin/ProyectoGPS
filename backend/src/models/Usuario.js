const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: false,
        trim: true,
        minLength: 1,
        maxLength: 12,
    },
    apellidos: {
        type: String,
        required: false,
        trim: true,
        minLength: 1,
        maxLength: 30,
    },
    fecha_nacimiento: {
        type: Date,
        required: false
    },
    telefono: {
        type: String,
        required: false,
        trim: true,
        minLength: 1,
        maxLength: 30
    },
    email: {
        type: String,
        required: false,
        unique: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },
    direccion: {
        type: String,
        required: false,
        trim: true,
        minLength: 1,
        maxLength: 100
    },
    password: {
        type: String,
        required: false,
        trim: true,
        minLength: 8,
        maxLength: 100
    },
    rol: {
        type: String,
        enum: ['adoptante', 'cuidador', 'admin'],
        default: 'adoptante'
    },
    imagen: [{
        type: String,
        trim: true,
        minLength: 0,
        maxLength: 100
    }]
});

module.exports = mongoose.model('Usuario', usuarioSchema);
