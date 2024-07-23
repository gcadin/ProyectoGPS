const mongoose = require('mongoose');

const denunciaSchema = mongoose.Schema({

fecha:{
    type: Date,
    default: Date.now
},
titulo:{
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
    maxLenght: 500
},
imagen:[{
    type: String,
    required: false,
    trim: true,
    minLenght: 1,
    maxLenght: 100
}]
})

module.exports = mongoose.model('Denuncia', denunciaSchema);