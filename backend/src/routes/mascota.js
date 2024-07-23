const express = require('express');
const upload = require('../middlewares/multer');
const {
    crearMascota,
    getMascotas,
    getMascotaById,
    updateMascota,
    deleteMascota
} = require('../controllers/mascota.controllers.js');

const router = express.Router();

router.post('/mascotas', upload.single('imagen'), crearMascota);
router.get('/mascotas', getMascotas);
router.get('/mascotas/:id', getMascotaById);
router.put('/mascotas/:id', updateMascota);
router.delete('/mascotas/:id', deleteMascota);

module.exports = router;