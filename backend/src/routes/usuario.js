const express = require('express');
const {
    crearUsuario,
    getUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario
} = require('../controllers/usuario.controllers.js');

const router = express.Router();

router.post('/usuarios', crearUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuarioById);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

module.exports = router;
