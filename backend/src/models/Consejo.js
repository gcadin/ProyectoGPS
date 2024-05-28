const mongoose = require(mongoose);

const consejoSchema = mongoose.Schema({

    id_consejo:{
        type: String,
        required: true,
        trim: true,
        minLenght: 1,
        maxLenght: 100
    },
 descripcion:{
        type: String,
        required: true,
        trim: true,
        minLenght: 1,
        maxLenght: 700
    },
 titulo:{
        type: String,
        required: true,
        trim: true,
        minLenght: 1,
        maxLenght: 100
    },
 fecha:{
        type: Date,
        required: true
        
    },
    foto:[{
        type: String,
        required: false,
        trim: true,
        minLenght: 1,
        maxLenght: 100
    }]
})


module.export = mongoose.model('Consejo', consejoSchema);