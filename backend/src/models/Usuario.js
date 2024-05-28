const mongoose = require(mongoose);

const usuarioSchema = mongoose.Schema({
    rut: {
        type: String,
        required: true,
        trim: true,
        minLenght: 1,
        maxLenght: 12,
    },
    fecha_nacimiento:{
        type: Date,
        required: true
        
    },
    telefono:{
         type: String,
         required: true,
         trim: true,
         minLenght: 1,
         maxLenght: 30
        },
    email:{
         type: String,
         required: true,
         trim: true,
         minLenght: 1,
         maxLenght: 100
        },
    direccion:{
         type: String,
         required: true,
         trim: true,
         minLenght: 1,
         maxLenght: 100
        },
    rol:{
         type: String,
         enum: [
             adoptante,
             cuidador,
             admin
            ],
         default: adoptante
        },
    foto:[{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 100
    }]
});

module.exports = mongoose.model('Usuario', usuarioSchema);
