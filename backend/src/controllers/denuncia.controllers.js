const Denuncia = require('../models/Denuncia');

const crearDenuncia = async (req, res) => {
   
   
    try {
            const nuevaDenuncia = new Denuncia(req.body);
        const denunciaGuardada = await nuevaDenuncia.save();
        res.status(201).json(denunciaGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getDenuncias = async (req, res) => {


    try {
        const denuncias = await Denuncia.find().populate('usuario');
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
        if (!denunciaEliminada) return res.status(404).json({ message: 'Denuncia no encontrada' });
        res.status(200).json({ message: 'Denuncia eliminada' });
    } catch (error) {
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
