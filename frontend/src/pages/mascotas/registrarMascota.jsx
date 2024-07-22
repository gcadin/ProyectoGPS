import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const InformacionBasica = () => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Mascota:</Form.Label>
        <Form.Control className='border' type="name" placeholder='Nombre mascota'/>
      </Form.Group>
      <Row>
        <Form.Group className="mb-3" as={Col} md='6' controlId="formBasicEdad">
          <Form.Label>Edad:</Form.Label>
          <Form.Control className='border' type="number" placeholder="Edad (años)" />
        </Form.Group>

        <Form.Group className="mb-3" as={Col} md='6' controlId="formBasicTamano">
          <Form.Label>Tamaño:</Form.Label>
          <Form.Control className='border' type="number" placeholder="Tamaño (centimetros)" />
        </Form.Group>
      </Row>
        
    </>
  )
}




const RegistrarMascota = () => {
  return (
    <>
        <Container className='w-100 flex justify-center mt-3 p-2'>
            <Form className='w-100 border rounded m-3 p-4'>
                <label className='text-2xl'>Formulario Registro Mascota</label>
                <hr />
                <InformacionBasica/>

                <Form.Group as={Col} className="mb-3" controlId="formBasicEspecie">
                  <Form.Label>Especie:</Form.Label>
                    <div className='flex justify-evenly'>
                      <Form.Check className='pr-3' type='radio' id='perro' name='Especie' label='Perro'  />
                      <Form.Check className='pr-3' type='radio' id='gato' name='Especie' label='Gato' />
                      <Form.Check className='pr-3' type='radio' id='otro' name='Especie' label='Otro' />
                    </div>
                </Form.Group>

                <Row>
                  <Form.Group as={Col} className="mb-3" controlId="raza">
                    <Form.Label>Raza:</Form.Label>
                    <Form.Control className='border' type="text" placeholder="(Si corresponde)" />
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="Esterilizada">
                    <Form.Label>Esterilizada:</Form.Label>
                    <Form.Select className='border' type="text" placeholder="">
                      <option>Seleccione según corresponda...</option>
                      <option value='Si'>Si</option>
                      <option value='No'>No</option>
                      <option value='No se sabe'>No se sabe</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
                
                <Form.Group className="mb-3" controlId="Vacunas">
                  <Form.Label>Vacunas Antirrabicas:</Form.Label>
                  <div className='flex'>
                    <div className='w-50'>
                      <label>Perros</label>
                      <Form.Check className='pr-3' type='checkbox' id='1' name='Perros' label='2 Meses'  />
                      <Form.Check className='pr-3' type='checkbox' id='2' name='Perros' label='3 Meses' />
                      <Form.Check className='pr-3' type='checkbox' id='3' name='Perros' label='4 Meses' />
                      <Form.Check className='pr-3' type='checkbox' id='4' name='Perros' label='6 Meses' />
                      <Form.Check className='pr-3' type='checkbox' id='5' name='Perros' label='12 Meses' />
                    </div>
                    <div className='w-50'>
                    <label>Gatos</label>
                      <Form.Check className='pr-3 ' type='checkbox' id='1' name='Gatos' label='2 meses'  />
                      <Form.Check className='pr-3 ' type='checkbox' id='2' name='Gatos' label='3 meses' />
                      <Form.Check className='pr-3 ' type='checkbox' id='3' name='Gatos' label='6 meses' />
                      <Form.Check className='pr-3 ' type='checkbox' id='3' name='Gatos' label='12 meses' />
                    </div>
                  </div>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Vacunas Anuales:</Form.Label>
                  <Form.Control className='border' type="text" placeholder="(Si corresponde)" />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Descripción:</Form.Label>
                  <Form.Control className='border' as='textarea' placeholder="Descripción de la mascota" />
                </Form.Group>

                <div className='mt-3 flex justify-center'>
                  <Button variant="primary" type="submit">
                    Registrar Mascota
                  </Button>
                </div>
               
            </Form>
        </Container>
    </>

    
    
  );
}

export default RegistrarMascota;