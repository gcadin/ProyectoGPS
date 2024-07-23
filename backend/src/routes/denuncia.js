const express = require('express');
const upload = require('../middlewares/multer');
const {
  crearDenuncia,
  getDenuncias,
  getDenunciaById,
  updateDenuncia,
  deleteDenuncia
} = require('../controllers/denuncia.controllers.js');

const router = express.Router();

router.post('/denuncias', upload.single('imagen'), crearDenuncia);
router.get('/denuncias', getDenuncias);
router.get('/denuncias/:id', getDenunciaById);
router.put('/denuncias/:id', updateDenuncia);
router.delete('/denuncias/:id', deleteDenuncia);

module.exports = router;
