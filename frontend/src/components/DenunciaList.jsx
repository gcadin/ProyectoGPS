import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import DeleteButton from './DeleteButton';
import '../index.css';
const DenunciaList = () => {
  const [denuncias, setDenuncias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDenuncias = async () => {
      try {
        const response = await axios.get('http://146.83.198.35:1273/api/denuncias/');
        console.log('API Response:', response.data);
        setDenuncias(Array.isArray(response.data) ? response.data.sort((a, b) => new Date(b.fecha) - new Date(a.fecha)): []);
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
        {denuncias.map(denuncia => (
          <div className="col-md-4" key={denuncia._id}>
            <div className="card mb-4">
              <img src={`http://146.83.198.35:1273/uploads/${denuncia.imagen}`} className="card-img-top" alt="Imagen de la denuncia" />
              <div className="card-body">
                <h5 className="card-title">{denuncia.titulo}</h5>
                <p className="card-text">Publicado a las: {formatDate(denuncia.fecha)}</p>
                <p className="card-text">{denuncia.descripcion}</p>
                <Link to={`/denuncias/${denuncia._id}`}>
                  <button type="button" className="btn btn-primary">Ver Más</button>
                </Link>

                <DeleteButton className='ButtonRight' id={denuncia._id}/>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DenunciaList;
