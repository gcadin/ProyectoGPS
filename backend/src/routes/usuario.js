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
const { validateUsuarioCreation, validateUsuarioUpdate } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/usuarios', upload.single('imagen'), validateUsuarioCreation, crearUsuario);
router.post('/login', autenticarUsuario);
router.get('/usuarios', getUsuarios);
router.get('/usuarios/:id', getUsuarioById);

router.get('/perfil', checkAuth, perfil);
router.put('/usuarios/:id', checkAuth, validateUsuarioUpdate, updateUsuario );
router.delete('/usuarios/:id', checkAuth, deleteUsuario);

module.exports = router;
