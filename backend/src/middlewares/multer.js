const express = require('express');
const multer = require('multer');
const path = require('path');
const Denuncia = require('../models/Denuncia');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post('/denuncias', upload.single('imagen'), async (req, res) => {
  try {
    const { id_denuncia, fecha, titulo, descripcion } = req.body;
    const newDenuncia = new Denuncia({
      id_denuncia,
      fecha,
      titulo,
      descripcion,
      imagen: req.file ? req.file.path : ''
    });

    await newDenuncia.save();
    res.json(newDenuncia);
  } catch (err) {
    res.status(500).json({ error: 'Error creating denuncia' });
  }
});

module.exports = router;
