const express = require('express');
const upload = require('../middlewares/multer');
const {
    crearMascota,
    getMascotas,
    getMascotaById,
    updateMascota,
    deleteMascota
} = require('../controllers/mascota.controllers.js');
const checkAuth = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/mascotas', checkAuth, upload.single('imagen'), crearMascota);
router.get('/mascotas', getMascotas);
router.get('/mascotas/:id', getMascotaById);
router.put('/mascotas/:id', checkAuth, updateMascota);
router.delete('/mascotas/:id', checkAuth, deleteMascota);

module.exports = router;