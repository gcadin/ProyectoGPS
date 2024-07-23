import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const DenunciarButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/denunciasform');
  };

  return (
    <Button variant="danger" onClick={handleClick}>
      Denunciar
    </Button>
  );
};

export default DenunciarButton;
