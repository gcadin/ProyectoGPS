const fs = require('fs');
const path = require('path');

const Denuncia = require('../models/Denuncia');

const crearDenuncia = async (req, res) => {
    try {
        const { fecha, titulo, descripcion } = req.body;
    
        const newDenuncia = new Denuncia({
            
            fecha,
            titulo,
            descripcion,
            imagen: req.file ? req.file.filename : 'default.jpg'
        });

        const denunciaGuardada = await newDenuncia.save();
        res.status(201).json(denunciaGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getDenuncias = async (req, res) => {


    try {
        const denuncias = await Denuncia.find();
        res.status(200).json(denuncias);
      } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getDenunciaById = async (req, res) => {
    try {
        const denuncia = await Denuncia.findById(req.params.id);
        if (!denuncia) return res.status(404).json({ message: 'Denuncia no encontrada' });
        res.status(200).json(denuncia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateDenuncia = async (req, res) => {
    try {
        const denunciaActualizada = await Denuncia.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!denunciaActualizada) return res.status(404).json({ message: 'Denuncia no encontrada' });
        res.status(200).json(denunciaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteDenuncia = async (req, res) => {
    try {
        const denunciaEliminada = await Denuncia.findByIdAndDelete(req.params.id);

        if (!denunciaEliminada) {
            return res.status(404).json({ message: 'Denuncia no encontrada' });
        }
        if (denunciaEliminada.imagen[0] !== 'default.jpg') {
            const ubiImagen = path.join(__dirname, '../uploads', denunciaEliminada.imagen[0]);

            fs.unlink(ubiImagen, (err) => {
                if (err) {
                    console.error('Error al eliminar la imagen:', err);
                    return res.status(500).json({ message: 'No se pudo borrar la imagen' });
                }
                res.status(200).json({ message: 'Denuncia eliminada' });
            });
        } else {
            res.status(200).json({ message: 'Denuncia eliminada' });
        }
    } catch (error) {
        console.error('Error al eliminar la denuncia:', error);
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    crearDenuncia,
    getDenuncias,
    getDenunciaById,
    updateDenuncia,
    deleteDenuncia
};
