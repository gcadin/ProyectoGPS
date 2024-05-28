const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    rut: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 12,
    },
    fecha_nacimiento: {
        type: Date,
        required: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 30
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },
    direccion: {
        type: String,
        required: true,
        trim: true,
        minLength: 1,
        maxLength: 100
    },
    rol: {
        type: String,
        enum: ['adoptante', 'cuidador', 'admin'],
        default: 'adoptante'
    },
    foto: [{
        type: String,
        trim: true,
        minLength: 1,
        maxLength: 100
    }]
});

module.exports = mongoose.model('Usuario', usuarioSchema);
