const express = require('express');
const upload = require('../middlewares/multer');
const {
    crearUsuario,
    getUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
    autenticarUsuario,
    perfil
} = require('../controllers/usuario.controllers.js');
const checkAuth = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/usuarios', upload.single('imagen'), crearUsuario);
router.post('/login', autenticarUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuarioById);

router.get('/perfil', checkAuth, perfil);
router.put('/usuarios/:id', checkAuth ,updateUsuario );
router.delete('/usuarios/:id', checkAuth ,deleteUsuario);

module.exports = router;
