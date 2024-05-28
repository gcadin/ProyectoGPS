const mongoose = require(mongoose);

const mascotaSchema = mongoose.Schema({


    id_mascota:{
        type: String,
        required: true,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    nombre:{
         type: String,
        required: true,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    descripcion:{			
            type: String,
            required: true,
            trim: true,
            minLenght: 1,
            maxLenght: 700					
    },
    especie:{
        type: String,
        required: true,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    edad:{
        type: Number,
        required: true,
        trim: true,
        minLenght: 1,
        maxLenght: 30
    },
    tamano:{
        type: String,
        required: true,
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
        maxLenght: 30
    }],
    esterilizacion:{
        type: Boolean,
        default: false
    },
    foto:[{
        type: String,
        required: true,
        trim: true,
        minLenght: 1,
        maxLenght: 150
    }]
})

module.export = mongoose.model('Mascota', mascotaSchema);