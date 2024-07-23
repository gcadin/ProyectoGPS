import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const MascotasList = () => {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDenuncias = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/mascotas');
        console.log('API Response:', response.data);
        setMascotas(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchDenuncias();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {mascotas.map(mascota => (
          <div className="col-md-4" key={mascota._id}>
            <div className="card mb-4">
              <img src={`http://localhost:3000/uploads/${mascota.imagen}`} className="card-img-top" alt="Imagen de la mascota" />
              <div className="card-body">
                <p className="m-0 card-text"><b>Nombre:</b> {mascota.nombre}</p>
                <p className="m-0 card-text"><b>Edad:</b> {mascota.edad} años</p>
                <p className="m-0 card-text"><b>tamaño:</b> {mascota.tamano} centimetros</p>
                <p className="m-0 card-text"><b>Especie:</b> {mascota.especie}</p>
                <p className="m-0 card-text"><b>Raza:</b> {mascota.raza}</p>
                <p className="m-0 card-text"><b>Esterilizada:</b> {mascota.esterilizacion}</p>
                <p className="m-0 card-text"><b>Vacunas Antirrábicas:</b> {mascota.vacunas}</p>
                <p className="m-0 card-text"><b>Vacunas adicionales:</b> {mascota.vacunas2}</p>
                <p className="card-text"><b>Descripción adicional:</b> {mascota.descripcion}</p>
                <Link to={`/mascotas/${mascota._id}`}>
                  <button type="button" className="btn btn-primary">Ver Más</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MascotasList;