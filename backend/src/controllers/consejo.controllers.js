const Consejo = require('../models/Consejo');

const crearConsejo = async (req, res) => {
    try {
        const nuevoConsejo = new Consejo(req.body);
        const consejoGuardado = await nuevoConsejo.save();
        res.status(201).json(consejoGuardado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getConsejos = async (req, res) => {
    try {
        const consejos = await Consejo.find();
        res.status(200).json(consejos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getConsejoById = async (req, res) => {
    try {
        const consejo = await Consejo.findById(req.params.id);
        if (!consejo) return res.status(404).json({ message: 'Consejo no encontrado' });
        res.status(200).json(consejo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateConsejo = async (req, res) => {
    try {
        const consejoActualizado = await Consejo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!consejoActualizado) return res.status(404).json({ message: 'Consejo no encontrado' });
        res.status(200).json(consejoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteConsejo = async (req, res) => {
    try {
        const consejoEliminado = await Consejo.findByIdAndDelete(req.params.id);
        if (!consejoEliminado) return res.status(404).json({ message: 'Consejo no encontrado' });
        res.status(200).json({ message: 'Consejo eliminado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    crearConsejo,
    getConsejos,
    getConsejoById,
    updateConsejo,
    deleteConsejo
};
