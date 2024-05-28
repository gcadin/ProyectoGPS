const express = require('express');
const {
    crearMascota,
    getMascotas,
    getMascotaById,
    updateMascota,
    deleteMascota
} = require('../controllers/mascota.controllers.js');

const router = express.Router();

router.post('/mascotas', crearMascota);
router.get('/mascotas', getMascotas);
router.get('/mascotas/:id', getMascotaById);
router.put('/mascotas/:id', updateMascota);
router.delete('/mascotas/:id', deleteMascota);

module.exports = router;