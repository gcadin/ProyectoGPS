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
    <div>
      <h1>{denuncia.titulo}</h1>
      <img src={`http://localhost:3000/uploads/${denuncia.imagen}`} alt="Imagen de la denuncia" />
      <p>{denuncia.descripcion}</p>
    </div>
  );
};

export default DenunciaDetails;
