import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DenunciaDetails = () => {
  const { id } = useParams();
  const [denuncia, setDenuncia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDenuncia = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/denuncias/${id}`);
        setDenuncia(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchDenuncia();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="denuncia-details container mt-5">
      <h1 className="denuncia-title">{denuncia.titulo}</h1>
      <p className="denuncia-date">Publicado el: {new Date(denuncia.fecha).toLocaleDateString()}</p>
      <img 
        src={`http://localhost:3000/uploads/${denuncia.imagen}`} 
        className="img-pag" 
        alt="Imagen de la denuncia" 
      />
      <h2 className="denuncia-description-title">Descripción</h2>
      <p className="denuncia-description">{denuncia.descripcion}</p>
    </div>
  );
};

export default DenunciaDetails;