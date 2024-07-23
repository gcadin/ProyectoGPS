const Mascota = require('../models/Mascota');

const crearMascota = async (req, res) => {
    try {
        const{nombre, descripcion, edad, tamano, especie, raza, esterilizacion, vacunas, vacunas2} = req.body;
        const nuevaMascota = new Mascota({
            nombre: nombre,
            descripcion: descripcion,
            edad: edad,
            tamano: tamano,
            especie: especie,
            raza: raza,
            esterilizacion: esterilizacion,
            vacunas: vacunas,
            vacunas2: vacunas2,
            imagen: req.file ? req.file.filename:''
        })
    //    const nuevaMascota = new Mascota(req.body);
        const MascotaGuardada = await nuevaMascota.save();
        res.status(201).json(MascotaGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getMascotas = async (req, res) => {
    try {
        const Mascotas = await Mascota.find();
        res.status(200).json(Mascotas);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getMascotaById = async (req, res) => {
    try {
        const mascota = await Mascota.findById(req.params.id);
        if (!mascota) return res.status(404).json({ message: 'Mascota no encontrado' });
        res.status(200).json(mascota);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const updateMascota = async (req, res) => {
    try {
        const MascotaActualizado = await Mascota.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!MascotaActualizado) return res.status(404).json({ message: 'Mascota no encontrado' });
        res.status(200).json(MascotaActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const deleteMascota = async (req, res) => {
    try {
        const MascotaEliminado = await Mascota.findByIdAndDelete(req.params.id);
        if (!MascotaEliminado) return res.status(404).json({ message: 'Mascota no encontrado' });
        res.status(200).json({ message: 'Mascota eliminado' });
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

