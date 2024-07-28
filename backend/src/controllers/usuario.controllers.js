const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const generarJWT = require('../helper/generarJWT');
// import generarJWT from '../helper/generarJWT';

const hashPassword = async (password) => {
    const saltRounds = 10; // Cuantos más rondas, más seguro, pero más lento.
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

const perfil = async (req, res) => {
    const {usuario} = req;

    res.json(usuario);
};

const autenticarUsuario = async (req, res) => {
    const{email, password} = req.body;

    const usuario = await Usuario.findOne({email: email})
    ;
    if (!usuario) {
        const error = new Error('El Usuario no existe')
        return res.status(404).json({mnsg: error.message})
    }

    const hashedPassword = usuario.password;
    const isMatch = await comparePassword(password, hashedPassword);
    if(isMatch){
        res.json({token: generarJWT(usuario.nombre, usuario._id, usuario.email)});
    }

};

const crearUsuario = async (req, res) => {
    try {
        const usuarioExiste = await Usuario.findOne({email: email})

        console.log('Datos:', Usuario.email);
        console.log('Datos:', Usuario.password);

        const{nombre, apellidos, email, telefono, direccion, fecha_nacimiento, password} = req.body;
        
        console.log('lalala');
        console.log('Datos:', req.body);

        if (usuarioExiste){
            const error = new Error('usuario ya registrado');
            return res.status(400).json({msg: error.message})
        }

        const hashedPassword = await hashPassword(password);

        const nuevoUsuario= new Usuario({
            nombre: nombre,
            apellidos:apellidos,
            fecha_nacimiento: fecha_nacimiento,
            telefono: telefono,
            email: email,
            direccion: direccion,
            password: hashedPassword,
            imagen: req.file ? req.file.filename:''
        })
        console.log(nuevoUsuario);
        const usuarioGuardado = await nuevoUsuario.save();
        res.status(201).json(usuarioGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuario.findById(req.params.id);
        if (!usuario) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const updateUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuarioActualizado) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const deleteUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioEliminado) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    crearUsuario,
    getUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
    autenticarUsuario,
    perfil
};
