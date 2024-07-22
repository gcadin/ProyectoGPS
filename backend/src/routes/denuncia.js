const express = require('express');
const multer = require('multer');
const path = require('path');
const {
    crearDenuncia,
    getDenuncias,
    getDenunciaById,
    updateDenuncia,
    deleteDenuncia
} = require('../controllers/denuncia.controllers.js');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../uploads')); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage });
  
router.post('/denuncias', upload.single('imagen'), crearDenuncia);
router.get('/denuncias', getDenuncias);
router.get('/denuncias/:id', getDenunciaById);
router.put('/denuncias/:id', updateDenuncia);
router.delete('/denuncias/:id', deleteDenuncia);

module.exports = router;