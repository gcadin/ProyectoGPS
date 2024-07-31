import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import styles from './Login.module.css';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { popError } from '../../utils/popUp';


const Login = () => {
  const {auth} = useAuth();

  return(
    <>
      {auth?._id ? <Navigate to='/' /> : <LoginForm />}

    </>
  )
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const url = 'http://146.83.198.35:1273/api/login';
      const { data } = await axios.post(url, {email, password})
      localStorage.setItem('token', data.token);
      window.location.reload();
    }catch(err){
      console.log(err);
      popError('Credenciales incorrectas');
    }
  }

  return (
    <>
      <Container className={styles.contenedor}>
          <Row className='w-100 border rounded'>
            <Col className='p-0' md={6}>
                <Image className={styles.imagenLogin} src="/portada.jpg" >
                </Image>
            </Col>
            <Col md={6} className='p-2 flex flex-col justify-center'>
              <h3 className='text-center m-0'>Iniciar sesión</h3>
              <hr className="mt-2"/>
              <Form className='w-100' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Email">
                  <Form.Label>Corre Electronico</Form.Label>
                  <Form.Control required className='border' value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='usuario@ejemplo.com'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="Password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control required className='border' value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder=''/>
                </Form.Group>

                <div className='mt-3 flex flex-col justify-center items-center'>
                  <Button variant="primary" className="btn btn-primary" type="submit">
                    Ingresar
                  </Button>
                  <div className="flex mt-3">
                    <label>
                        ¿Aun no estas registrado?
                    </label>
                    <a href="/registro">registrarse</a>
                  </div>
                </div>

              </Form>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;