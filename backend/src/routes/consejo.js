const express = require('express');
const {
    crearConsejo,
    getConsejos,
    getConsejoById,
    updateConsejo,
    deleteConsejo
} = require('../controllers/consejo.controllers.js');

const router = express.Router();

router.post('/consejos', crearConsejo);
router.get('/consejos', getConsejos);
router.get('/consejos/:id', getConsejoById);
router.put('/consejos/:id', updateConsejo);
router.delete('/consejos/:id', deleteConsejo);

module.exports = router;