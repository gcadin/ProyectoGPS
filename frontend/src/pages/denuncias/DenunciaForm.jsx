import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import axios from 'axios';
import { popSuccess, popError } from '../../utils/popUp';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const DenunciaForm = () => {
  const navigate = useNavigate();
  const { auth, cargando } = useAuth();
  const [image, setImage] = useState(null);
  const [tipo, setTipo] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (!cargando && !auth._id) {
      navigate('/login');
    }
  }, [cargando, auth, navigate]);

  const tipoOptions = [
    { value: 'Negligencias', label: 'Negligencias' },
    { value: 'Perdida de Mascotas', label: 'Perdida de Mascotas' },
    { value: 'Animales Peligrosos', label: 'Animales Peligrosos' },
    { value: 'Abandono', label: 'Abandono' },
    { value: 'Maltrato Animal', label: 'Maltrato Animal' },
    { value: 'Sobreexplotación Animal', label: 'Sobreexplotación Animal' },
    { value: 'Otros', label: 'Otros' },
  ];

  const validateForm = (formData) => {
    const newErrors = {};

    const titulo = formData.get('titulo');
    const descripcion = formData.get('descripcion');
    const tipo = formData.getAll('tipo');

    if (!titulo) {
      newErrors.titulo = 'El título es obligatorio';
    } else if (titulo.length < 5) {
      newErrors.titulo = 'El título debe tener al menos 5 caracteres';
    } else if (titulo.length > 100) {
      newErrors.titulo = 'El título no debe exceder los 100 caracteres';
    }

    if (!descripcion) {
      newErrors.descripcion = 'La descripción es obligatoria';
    } else if (descripcion.length < 5) {
      newErrors.descripcion = 'La descripción debe tener al menos 5 caracteres';
    } else if (descripcion.length > 1000) {
      newErrors.descripcion = 'La descripción no debe exceder los 1000 caracteres';
    }

    if (tipo.length === 0) {
      newErrors.tipo = 'Debe seleccionar al menos un tipo de denuncia';
    }

    if (image) {
      const fileType = image.type;
      const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
      if (!validImageTypes.includes(fileType)) {
        newErrors.imagen = 'El formato de imagen no es válido';
      }
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    tipo.forEach(item => {
      formData.append('tipo', item.value);
    });

    if (image) {
      formData.append('imagen', image);
    }

    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
      };

      const response = await axios.post('http://146.83.198.35:1273/api/denuncias', formData, config);
      console.log('prueba:', response.data.image);
      popSuccess('Denuncia Publicada Correctamente');
      form.reset();
      setImage(null);
      setTipo([]);
      setErrors({});
    } catch (error) {
      console.error('Error al enviar datos:', error);
      popError('Lo sentimos:(. No hemos podido publicar tu denuncia. Por favor intentelo mas tarde');
    }
  };

  return (
    <Container className='w-100 flex justify-center mt-3 p-2'>
      <Form className='w-100 border rounded m-3 p-4' onSubmit={handleSubmit}>
        <label className='text-2xl'>Formulario de Registro de Denuncia</label>
        <hr />
        <InfoDenuncia setImage={setImage} errors={errors} tipo={tipo} setTipo={setTipo} tipoOptions={tipoOptions} />
        <div className='mt-3 flex justify-center'>
          <Button variant="primary" type="submit">
            Registrar Denuncia
          </Button>
          <Button className='buttonRight' onClick={() => navigate('/denuncias')} >
            Volver a denuncias
          </Button>
        </div>
      </Form>
    </Container>
  );
};

const InfoDenuncia = ({ setImage, errors, tipo, setTipo, tipoOptions }) => {
  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicTitulo">
        <Form.Label>Título de la denuncia:</Form.Label>
        <Form.Control className='border' type="text" placeholder='Título de la denuncia' name="titulo" />
        {errors.titulo && <Form.Text className="text-danger">{errors.titulo}</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescripcion">
        <Form.Label>Descripción:</Form.Label>
        <Form.Control className='border' as="textarea" rows={3} placeholder='Descripción de la denuncia' name="descripcion" />
        {errors.descripcion && <Form.Text className="text-danger">{errors.descripcion}</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTipo">
        <Form.Label>Tipo de Denuncia:</Form.Label>
        <Select
          className="basic-multi-select"
          classNamePrefix="select"
          isMulti
          name="tipo"
          options={tipoOptions}
          value={tipo}
          onChange={setTipo}
          placeholder="Selecciona los tipos"
          components={makeAnimated()}
        />
        {errors.tipo && <Form.Text className="text-danger">{errors.tipo}</Form.Text>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImagen">
        <Form.Label>Imagen (opcional):</Form.Label>
        <Form.Control className='border' type="file" accept="image/*" onChange={handleFileChange} />
        {errors.imagen && <Form.Text className="text-danger">{errors.imagen}</Form.Text>}
      </Form.Group>
    </>
  );
};

export default DenunciaForm;
