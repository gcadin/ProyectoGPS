const mongoose = require('mongoose');

const mascotaSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    descripcion:{			
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 700					
    },
    especie:{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    edad:{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    tamano:{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    raza:{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    vacunas:[{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 130
    }],
    vacunas2:{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 130
    },
    esterilizacion:{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    imagen:[{
    type: String,
    required: false,
    trim: true,
    minLenght: 1,
    maxLenght: 100
    }]
})

module.exports = mongoose.model('Mascota', mascotaSchema);