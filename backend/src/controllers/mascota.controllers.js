const mascota = require('../models/Mascota');

const crearMascota = async (req, res) => {
    try {
        const nuevaMascota = new Mascota(req.body);
        const MascotaGuardada = await nuevaMascota.save();
        res.status(201).json(MascotaGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getMascotas = async (req, res) => {
    try {
        const Mascotas = await mascota.find();
        res.status(200).json(Mascotas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getMascotaById = async (req, res) => {
    try {
        const Mascota = await mascota.findById(req.params.id);
        if (!Mascota) return res.status(404).json({ message: 'mascota no encontrado' });
        res.status(200).json(Mascota);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const updateMascota = async (req, res) => {
    try {
        const MascotaActualizado = await mascota.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!MascotaActualizado) return res.status(404).json({ message: 'mascota no encontrado' });
        res.status(200).json(MascotaActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const deleteMascota = async (req, res) => {
    try {
        const MascotaEliminado = await mascota.findByIdAndDelete(req.params.id);
        if (!MascotaEliminado) return res.status(404).json({ message: 'mascota no encontrado' });
        res.status(200).json({ message: 'mascota eliminado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    crearMascota,
    getMascotas,
    getMascotaById,
    updateMascota,
    deleteMascota
};

