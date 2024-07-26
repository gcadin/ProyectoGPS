import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';
import axios from 'axios';
import UserSideBar from '../../layout/userSideBar';

const RegistrarMascota = () => {
  const [ nombre , setNombre ] = useState('');
  const [ edad , setEdad ] = useState('');
  const [ tamano , setTamano ] = useState('');
  const [ especie , setEspecie ] = useState('');
  const [ raza , setRaza ] = useState('');
  const [ esterilizacion , setEsterilizacion ] = useState('');
  const [ vacunas , setVacunas ] = useState('');
  const [ vacunas2 , setVacunas2 ] = useState('');
  const [ descripcion , setDescripcion ] = useState('');
  const [ imagen , setImagen ] = useState('');

  const handleCheckbox = (e) => {
    if (e.target.checked == true) {
      setVacunas([...vacunas, e.target.value]);
    }
    if(e.target.checked == false) {
      const elementos = vacunas.filter(vacunas => vacunas != e.target.value);
      setVacunas(elementos);
    }
  }

  const handleRadio = (e) => {
    setEspecie(e.target.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);

    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('especie', especie);
    formData.append('edad', edad);
    formData.append('tamano', tamano);
    formData.append('raza', raza);
    formData.append('vacunas', vacunas);
    formData.append('vacunas2', vacunas2);
    formData.append('esterilizacion', esterilizacion);
    formData.append('imagen', imagen);
    
    
    try{
      const url = 'http://localhost:3000/api/mascotas';
      await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log('Success');
    }catch(err){
      console.log(err);
    }
  };

  const handleFileChange = (event) => {
    setImagen(event.target.files[0]);
  };

  return (
    <>
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ flex: '0 0 auto' }}>
              <UserSideBar />
          </div>
          <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
          <Container className='w-100 flex justify-center mt-3 p-2'>
              <Form className='w-100 border rounded m-3 p-4' onSubmit={handleSubmit}>
                  <label className='text-2xl'>Formulario Registro Mascota</label>
                  <hr />
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre Mascota:</Form.Label>
                    <Form.Control required className='border' value={nombre} onChange={e => setNombre(e.target.value)} type="text" placeholder='Nombre mascota'/>
                  </Form.Group>
                  <Row>
                    <Form.Group className="mb-3" as={Col} md='6' controlId="formBasicEdad">
                      <Form.Label>Edad:</Form.Label>
                      <Form.Control className='border' value={edad} onChange={e => setEdad(e.target.value)} type="number" placeholder="Edad (años)" />
                    </Form.Group>
                    <Form.Group className="mb-3" as={Col} md='6' controlId="formBasicTamano">
                      <Form.Label>Tamaño:</Form.Label>
                      <Form.Control className='border' value={tamano} onChange={e => setTamano(e.target.value)} type="number" placeholder="Tamaño (centimetros)" />
                    </Form.Group>
                  </Row>
                  <Form.Group as={Col} className="mb-3" controlId="formBasicEspecie">
                    <Form.Label>Especie:</Form.Label>
                      <div className='flex justify-evenly'>
                        <Form.Check className='pr-3' type='radio' value='perro' onChange={handleRadio} id='perro' name='Especie' label='Perro'  />
                        <Form.Check className='pr-3' type='radio' value='gato' onChange={handleRadio} id='gato' name='Especie' label='Gato' />
                        <Form.Check className='pr-3' type='radio' value='otro' onChange={handleRadio} id='otro' name='Especie' label='Otro' />
                      </div>
                  </Form.Group>
                  <Row>
                    <Form.Group as={Col} className="mb-3" controlId="raza">
                      <Form.Label>Raza:</Form.Label>
                      <Form.Control className='border' value={raza} onChange={e => setRaza(e.target.value)} type="text" placeholder="(Si corresponde)" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="Esterilizada">
                      <Form.Label>Esterilizada:</Form.Label>
                      <Form.Select className='border' value={esterilizacion} onChange={e => setEsterilizacion(e.target.value)} type="text" placeholder="">
                        <option>Seleccione según corresponda...</option>
                        <option value='Si'>Si</option>
                        <option value='No'>No</option>
                        <option value='No se sabe'>No se sabe</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group as={Col} className="mb-3" controlId="Vacunas">
                      <Form.Label>Vacunas Antirrabicas:</Form.Label>
                        <Form.Check className='pr-3' value='2 Meses' onChange={handleCheckbox} type='checkbox' id='1' label='2 Meses'  />
                        <Form.Check className='pr-3' value='3 Meses' onChange={handleCheckbox} type='checkbox' id='2' label='3 Meses' />
                        <Form.Check className='pr-3' value='4 Meses' onChange={handleCheckbox} type='checkbox' id='3' label='4 Meses (solo perros)' />
                        <Form.Check className='pr-3' value='6 Meses' onChange={handleCheckbox} type='checkbox' id='4' label='6 Meses' />
                        <Form.Check className='pr-3' value='12 Meses' onChange={handleCheckbox} type='checkbox' id='5' label='12 Meses' />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="Vacunas2">
                      <Form.Label>Vacunas Adicionales:</Form.Label>
                      <Form.Control className='border' as='textarea' value={vacunas2} onChange={e => setVacunas2(e.target.value)} type="text" placeholder="Vacunas anuales, según tratamiento u otro..." />
                    </Form.Group>
                  </Row>
                  <Form.Group>
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control className='border' value={descripcion} onChange={e => setDescripcion(e.target.value)} as='textarea' placeholder="Descripción de la mascota" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicImagen">
                    <Form.Label>Imagen (opcional):</Form.Label>
                    <Form.Control className='border' type="file" accept="image/*" onChange={handleFileChange} />
                  </Form.Group>
                  <div className='mt-3 flex justify-center'>
                    <Button variant="primary" type="submit">
                      Registrar Mascota
                    </Button>
                  </div>
              </Form>
          </Container>
        </div>
      </div>
    </>
  );
}

export default RegistrarMascota;