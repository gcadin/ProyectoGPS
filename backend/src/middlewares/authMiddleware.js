const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario')

const checkAuth = async (req, res, next) => {
    let token;

    if ( req.headers.authorization){
        try {
            token = req.headers.authorization

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.usuario = await Usuario.findOne({email: decoded.email});
            //req.usuario = await Usuario.findById(decoded.id);
            
            return next();
        } catch (error) {
            const e = new Error('token invalido');
            //res.status(403).json({msg: e.message})
        }
    }

    if(!token){
        const error = new Error('token invalido o inexistente');
        res.status(403).json({msg: error.message})
    }

    next();
}

module.exports = checkAuth;