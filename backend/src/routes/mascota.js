const express = require('express');
const upload = require('../middlewares/multer');
const {
    crearMascota,
    getMascotas,
    getMascotasUsuario,
    getMascotaById,
    updateMascota,
    deleteMascota
} = require('../controllers/mascota.controllers.js');

const router = express.Router();

router.post('/mascotas', upload.single('imagen'), crearMascota);
router.get('/mascotas', getMascotas);
router.post('/mascotasUsuario', getMascotasUsuario);
router.get('/mascotas/:id', getMascotaById);
router.put('/mascotas/:id', updateMascota);
router.delete('/mascotas/:id', deleteMascota);

module.exports = router;