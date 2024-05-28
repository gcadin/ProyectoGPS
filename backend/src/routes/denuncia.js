const express = require('express');
const {
    crearDenuncia,
    getDenuncias,
    getDenunciaById,
    updateDenuncia,
    deleteDenuncia
} = require('../controllers/denuncia.controllers.js');

const router = express.Router();

router.post('/denuncias', crearDenuncia);
router.get('/denuncias', getDenuncias);
router.get('/denuncias/:id', getDenunciaById);
router.put('/denuncias/:id', updateDenuncia);
router.delete('/denuncias/:id', deleteDenuncia);

module.exports = router;