import { useEffect, useState } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom';

const MascotasList = () => {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // const handleDelete = async (e) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/api/mascotas/${e.target.value}`);
  //     location.reload();
  //   } catch (err) {
  //     console.error('API Error:', err);
  //   }
  // };

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const response = await axios.get('http://146.83.198.35:1273/api/mascotas?populate=usuario');
        console.log('API Response:', response.data);
        setMascotas(Array.isArray(response.data) ? response.data : []);
        setLoading(false);
      } catch (err) {
        console.error('API Error:', err);
        setError(err);
        setLoading(false);
      }
    };

    fetchMascotas();
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
              <img src={`http://146.83.198.35:1273/uploads/${mascota.imagen}`} className="card-img-top" alt="Imagen de la mascota" />
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
                {mascota.usuario && mascota.usuario.telefono && (
                  <a 
                    href={`https://wa.me/${mascota.usuario.telefono}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <button type="button" className="btn btn-success mt-2">Contactar por WhatsApp</button>
                  </a>)}
                {/* <div className='flex justify-end'>
                  <div>
                    <Link to={`/editarMascota/${mascota._id}`}>
                      <button type="button" className="btn btn-primary">Editar</button>
                    </Link>
                  </div>
                  <div>
                    <button type='button' onClick={handleDelete} value={mascota._id} className='btn btn-danger ml-2'>Eliminar</button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MascotasList;