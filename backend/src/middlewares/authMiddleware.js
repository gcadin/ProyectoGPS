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
            const e = new Error('Token no válido');
            return res.status(403).json({msg: e.message});
        }
    }

    if(!token){
        const error = new Error('Token no válido o inexistente');
        return res.status(403).json({msg: error.message});
    }
}

module.exports = checkAuth;