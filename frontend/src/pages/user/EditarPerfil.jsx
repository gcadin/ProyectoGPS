import { useState, useEffect } from 'react';
import { Button, Form, Container, Col, Row, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import UserSideBar from '../../layout/userSideBar';

const formatDate = (isoDate) => {
  const [year, month, day] = isoDate.split('T')[0].split('-');
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

function EditarPerfil() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState(auth.email || "");
  const [nombre, setNombre] = useState(auth.nombre || "");
  const [apellidos, setApellidos] = useState(auth.apellidos || "");
  const [telefono, setTelefono] = useState(auth.telefono || "");
  const [direccion, setDireccion] = useState(auth.direccion || "");
  const [fecha_nacimiento, setFecha_nacimiento] = useState(formatDate(auth.fecha_nacimiento) || "");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setEmail(auth.email || "");
    setNombre(auth.nombre || "");
    setApellidos(auth.apellidos || "");
    setTelefono(auth.telefono || "");
    setDireccion(auth.direccion || "");
    setFecha_nacimiento(formatDate(auth.fecha_nacimiento) || "");
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (nombre.length > 100 || nombre.length < 3) {
      newErrors.nombre = 'Nombre invalido';
    }

    if (apellidos.length > 100 || apellidos.length < 3) {
      newErrors.apellidos = 'Apellidos invalidos';
    }

    if (telefono.length !== 9) {
      newErrors.telefono = 'Número de teléfono no válido';
    }

    if (direccion.length < 5) {
      newErrors.direccion = 'Dirección no válida';
    }

    if (password && password !== password2) {
      newErrors.password2 = 'Las contraseñas no son iguales';
    }

    if (password && password.length < 8) {
      newErrors.password = 'Mínimo 8 caracteres';
    }

    if (password2 && password2.length < 8) {
      newErrors.password2 = 'Mínimo 8 caracteres';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formData = {
      nombre,
      apellidos,
      email,
      telefono,
      direccion,
      fecha_nacimiento,
      ...(password && { password })
    };

    try {
      const url = `http://localhost:3000/api/usuarios/${auth._id}`;
      await axios.put(url, formData);
      console.log('Success');
      navigate('/perfil');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: '0 0 auto' }}>
        <UserSideBar />
      </div>
      <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
        <Container>
          <Container className='w-100 flex justify-center mt-3 p-2'>
            <Form className='w-100 border rounded m-3 p-4' onSubmit={handleSubmit}>
              <label className='text-2xl'>Editar Perfil</label>
              <hr />
              <Row>
                <Form.Group as={Col} md={6} className="mb-3" controlId="Nombre">
                  <Form.Label><b>Nombre:</b></Form.Label>
                  <Form.Control required value={nombre} onChange={e => setNombre(e.target.value)} className='border' type="text" name='nombre' />
                  {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
                </Form.Group>

                <Form.Group as={Col} md={6} className="mb-3" controlId="Apellidos">
                  <Form.Label><b>Apellidos:</b></Form.Label>
                  <Form.Control required value={apellidos} onChange={e => setApellidos(e.target.value)} className='border' type="text" name='apellidos' />
                  {errors.apellidos && <div className="text-danger">{errors.apellidos}</div>}
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="Email">
                <Form.Label><b>Correo electrónico:</b></Form.Label>
                <Form.Control value={email} onChange={e => setEmail(e.target.value)} className='border' type="email" name='email' />
              </Form.Group>

              <Row>
                <Form.Group as={Col} md={4} className="mb-3" controlId="Telefono">
                  <Form.Label><b>Teléfono:</b></Form.Label>
                  <InputGroup>
                    <InputGroup.Text id="inputGroupPrepend">+56</InputGroup.Text>
                    <Form.Control required value={telefono} onChange={e => setTelefono(e.target.value)} className='border' type="text" name='telefono' />
                  </InputGroup>
                  {errors.telefono && <div className="text-danger">{errors.telefono}</div>}
                </Form.Group>

                <Form.Group as={Col} md={4} className="mb-3" controlId="Direccion">
                  <Form.Label><b>Dirección:</b></Form.Label>
                  <Form.Control required value={direccion} onChange={e => setDireccion(e.target.value)} className='border' type="text" name='direccion' />
                  {errors.direccion && <div className="text-danger">{errors.direccion}</div>}
                </Form.Group>

                <Form.Group as={Col} md={4} className="mb-3" controlId="FechaNacimiento">
                  <Form.Label><b>Fecha de Nacimiento:</b></Form.Label>
                  <Form.Control required value={fecha_nacimiento} onChange={e => setFecha_nacimiento(e.target.value)} className='border' type="date" name='fecha_nacimiento' />
                </Form.Group>
              </Row>

              <p>(*Se require contraseña para guardar los cambios)</p>

              <Row>
                <Form.Group as={Col} md={6} className="mb-3" controlId="password">
                  <Form.Label><b>Contraseña:</b></Form.Label>
                  <Form.Control value={password} onChange={e => setPassword(e.target.value)} className='border' type="password" pattern='.{8,}' name='password' placeholder="Nueva Contraseña (opcional)" />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </Form.Group>

                <Form.Group as={Col} md={6} className="mb-3" controlId="password2">
                  <Form.Label><b>Repetir Contraseña:</b></Form.Label>
                  <Form.Control value={password2} onChange={e => setPassword2(e.target.value)} className='border' type="password" pattern='.{8,}' name='password2' placeholder="Repetir Nueva Contraseña" />
                  {errors.password2 && <div className="text-danger">{errors.password2}</div>}
                </Form.Group>
              </Row>

              <div className='mt-3 flex justify-center'>
                <Button variant="primary" type="submit">
                  Modificar valores
                </Button>
              </div>
            </Form>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default EditarPerfil;
