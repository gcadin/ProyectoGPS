require("dotenv").config();


const jwt = require('jsonwebtoken');

const x = process.env.JWT_SECRET;


console.log('lala:', x);
const generarJWT = (nombre, id, email) => {
    
    return jwt.sign({nombre: nombre, id: id, email: email}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
}


module.exports = generarJWT;