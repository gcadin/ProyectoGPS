import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom'

function RegisterForm() {
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [fecha_nacimiento, setFecha_nacimiento] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [imagen, setImagen] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== password2) {
          console.log('los password no son iguales');
          return;
        }

        if(password.length < 9) {
          console.log('minimo 9 caracteres');
          return;
        }

        const form = e.target;
        const formData = new FormData(form);

        formData.append('id', '');

        if(imagen){
          formData.append('imagen', imagen);
        }

        try{
            const url = 'http://localhost:3000/api/usuarios';
            await axios.post(url, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Success');
            <Navigate to='/login'/>
        }catch(err){
          console.log(err);
        }

    }

    const handleFileChange = (event) => {
        setImagen(event.target.files[0]);
      };

    return (
        <>
            <Container>
                
        <Container className='w-100 flex justify-center mt-3 p-2'>
            <Form className='w-100 border rounded m-3 p-4' onSubmit={handleSubmit}>
                <label className='text-2xl'>Formulario Registro Usuarios</label>
                <hr />
                <Row>
                    <Form.Group as={Col} md={6} className="mb-3" controlId="Nombre">
                      <Form.Label><b>Nombre:</b></Form.Label>
                      <Form.Control required value={nombre} onChange={e => setNombre(e.target.value)} className='border' type="text" name='nombre' placeholder='nombre' />
                    </Form.Group>

                    <Form.Group as={Col} md={6} className="mb-3" controlId="Apellidos">
                      <Form.Label><b>Apellidos:</b></Form.Label>
                      <Form.Control required value={apellidos} onChange={e => setApellidos(e.target.value)} className='border' type="text" name='apellidos' placeholder='Apellidos' />
                    </Form.Group>
                </Row>
                
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label><b>Correo electronico:</b></Form.Label>
                  <Form.Control value={email} onChange={e => setEmail(e.target.value)} className='border' type="email" name='email' placeholder="usuario@ejemplo.com" />
                </Form.Group>

                <Row>
                    <Form.Group as={Col} md={4} className="mb-3" controlId="Telefono">
                      <Form.Label><b>Telefono:</b></Form.Label>
                      <InputGroup>
                        <InputGroup.Text id="inputGroupPrepend">+56</InputGroup.Text>
                        <Form.Control required value={telefono} onChange={e => setTelefono(e.target.value)} className='border' type="text" name='telefono' placeholder='9 87654321' />
                      </InputGroup>

                    </Form.Group>

                    <Form.Group as={Col} md={4} className="mb-3" controlId="Dirección">
                      <Form.Label><b>Dirección:</b></Form.Label>
                      <Form.Control required value={direccion} onChange={e => setDireccion(e.target.value)} className='border' type="text" name='direccion' placeholder='Comuna, N° casa' />
                    </Form.Group>

                    <Form.Group as={Col} md={4} className="mb-3" controlId="Fecha Nacimiento">
                      <Form.Label><b>Fecha Nacimiento:</b></Form.Label>
                      <Form.Control required value={fecha_nacimiento} onChange={e => setFecha_nacimiento(e.target.value)} className='border' type="date" name='fecha_nacimiento'/>
                    </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} md={6} className="mb-3" controlId="password">
                    <Form.Label><b>Contraseña:</b></Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} className='border'  type="password" pattern='.{8,}' name='password' placeholder="Contraseña" />
                  </Form.Group>

                  <Form.Group as={Col} md={6} className="mb-3" controlId="password2">
                    <Form.Label><b>Repetir Contraseña:</b></Form.Label>
                    <Form.Control value={password2} onChange={e => setPassword2(e.target.value)}  className='border'  type="password" pattern='.{8,}' name='password2' placeholder="Repetir Contraseña" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicImagen">
                  <Form.Label><b>Foto (opcional):</b></Form.Label>
                  <Form.Control className='border' type="file" accept="image/*" onChange={handleFileChange} />
                </Form.Group>


                <div className='mt-3 flex justify-center'>
                  <Button variant="primary" type="submit">
                    Registrarse
                  </Button>
                </div>
            </Form>
        </Container>
            </Container>
        </>
        
       
        
    );
}

export default RegisterForm;
