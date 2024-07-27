import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserSideBar from '../../layout/userSideBar';

const EditarMascota = () => {
    const {id} = useParams();
    const [mascota, setMascota] = useState([]);

    useEffect( () => {
        const GetInf = async () => {
            try {

                console.log(id);
                const response = await axios.get(`http://localhost:3000/api/mascotas/${id}`);
                console.log('API Response:', response.data);
                setMascota(response.data);
            } catch (err) {
                console.error('API Error:', err);
            }
        }

        GetInf();
    }, []);
    
    

    const handleSubmit = () => {

    }

    return(
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
                    <Form.Control required value={mascota.nombre} className='border' type="text" />
                  </Form.Group>
                  <Row>
                    <Form.Group className="mb-3" as={Col} md='6' controlId="formBasicEdad">
                      <Form.Label>Edad:</Form.Label>
                      <Form.Control value={mascota.edad} className='border' type="number" placeholder="Edad (años)" />
                    </Form.Group>

                    <Form.Group className="mb-3" as={Col} md='6' controlId="formBasicTamano">
                      <Form.Label>Tamaño:</Form.Label>
                      <Form.Control value={mascota.tamano} className='border' type="number" placeholder="Tamaño (centimetros)" />
                    </Form.Group>
                  </Row>

                  <Form.Group as={Col} className="mb-3" controlId="formBasicEspecie">
                    <Form.Label>Especie:</Form.Label>
                      <div className='flex justify-evenly'>
                        <Form.Check checked={mascota.especie === 'perro'} className='pr-3' type='radio' value='perro'  id='perro' name='Especie' label='Perro'  />
                        <Form.Check checked={mascota.especie === 'gato'} className='pr-3' type='radio' value='gato'  id='gato' name='Especie' label='Gato' />
                        <Form.Check checked={mascota.especie === 'otro'} className='pr-3' type='radio' value='otro'  id='otro' name='Especie' label='Otro' />
                      </div>
                  </Form.Group>

                  <Row>
                    <Form.Group as={Col} className="mb-3" controlId="raza">
                      <Form.Label>Raza:</Form.Label>
                      <Form.Control value={mascota.raza} className='border'  type="text" placeholder="(Si corresponde)" />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="Esterilizada">
                      <Form.Label>Esterilizada:</Form.Label>
                      <Form.Select value={mascota.esterilizacion} className='border' type="text" placeholder="">
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
                        <Form.Check className='pr-3' value='2 Meses'  type='checkbox' id='1' label='2 Meses'  />
                        <Form.Check className='pr-3' value='3 Meses'  type='checkbox' id='2' label='3 Meses' />
                        <Form.Check className='pr-3' value='4 Meses'  type='checkbox' id='3' label='4 Meses (solo perros)' />
                        <Form.Check className='pr-3' value='6 Meses'  type='checkbox' id='4' label='6 Meses' />
                        <Form.Check className='pr-3' value='12 Meses'  type='checkbox' id='5' label='12 Meses' />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="Vacunas2">
                      <Form.Label>Vacunas Adicionales:</Form.Label>
                      <Form.Control value={mascota.vacunas2} className='border' as='textarea' type="text" placeholder="Vacunas anuales, según tratamiento u otro..." />
                    </Form.Group>
                  </Row>


                  <Form.Group>
                    <Form.Label>Descripción:</Form.Label>
                    <Form.Control value={mascota.descripcion} className='border' as='textarea' placeholder="Descripción de la mascota" />
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
    )
}

export default EditarMascota;