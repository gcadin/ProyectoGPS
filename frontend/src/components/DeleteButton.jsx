import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { popSuccess, popError } from '../utils/popUp.js'; 


const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://146.83.198.35:1273/api/denuncias/${id}`);
      popSuccess('Denuncia eliminada correctamente');

      setTimeout(function(){
         window.location.reload();

    }, 4000);
    
    
    } catch (error) {
      console.error('Error al eliminar denuncia:', error);
      popError('Lo sentimos :( No hemos podido eliminar la denuncia. Por favor, intenta nuevamente más tarde.');
    }
  };

  return (
    <Button variant="danger" onClick={handleDelete}>
      Eliminar
    </Button>
  );
};

export default DeleteButton;
