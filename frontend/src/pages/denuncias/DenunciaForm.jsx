import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import {popSuccess, popError} from '../../utils/popUp';

const DenunciaForm = () => {
  const [image, setImage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    if (image) {
      formData.append('imagen', image);
    }

    try {
      const response = await axios.post('http://localhost:3000/api/denuncias', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('prueba:', response.data.image);
      popSuccess('Denuncia Publicada Correctamente')
    } catch (error) {
      console.error('Error al enviar datos:', error);
      popError('Lo sentimos:(. No hemos podido publicar tu denuncia. Por favor intentelo mas tarde')
    
    }
  };

  return (
    <Container className='w-100 flex justify-center mt-3 p-2'>
      <Form className='w-100 border rounded m-3 p-4' onSubmit={handleSubmit}>
        <label className='text-2xl'>Formulario de Registro de Denuncia</label>
        <hr />
        <InfoDenuncia setImage={setImage} />

        <div className='mt-3 flex justify-center'>
          <Button variant="primary" type="submit">
            Registrar Denuncia
          </Button>
        </div>
      </Form>
    </Container>
  );
};

const InfoDenuncia = ({ setImage }) => {
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicTitulo">
        <Form.Label>Título de la denuncia:</Form.Label>
        <Form.Control className='border' type="text" placeholder='Título de la denuncia' name="titulo" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control className='border' as="textarea" rows={3} placeholder='Descripción de la denuncia' name="descripcion" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImagen">
        <Form.Label>Imagen (opcional):</Form.Label>
        <Form.Control className='border' type="file" accept="image/*" onChange={handleFileChange} />
      </Form.Group>
    </>
  );
};


export default DenunciaForm;