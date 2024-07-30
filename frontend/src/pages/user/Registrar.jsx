import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { popError } from '../../utils/popUp';

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

    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        //------validaciones----------------------------
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

        if (password !== password2) {
            newErrors.password2 = 'Las contraseñas no son iguales';
        }

        if (password.length < 8) {
            newErrors.password = 'Mínimo 9 caracteres';
        }

        if (password2.length < 8) {
            newErrors.password2 = 'Mínimo 9 caracteres';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        //------validaciones----------------------------

        const form = e.target;
        const formData = new FormData(form);

        formData.append('id', '');

        if (imagen) {
            formData.append('imagen', imagen);
        }

        try {
            const url = 'http://localhost:3000/api/usuarios';
            await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Success');
            <Navigate to='/login' />
        } catch (err) {
            console.log(err);
            popError('Correo electronico invalido');
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
                                <Form.Control
                                    required
                                    value={nombre}
                                    onChange={e => setNombre(e.target.value)}
                                    className='border'
                                    type="text"
                                    name='nombre'
                                    placeholder='Nombre'
                                />
                                {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
                            </Form.Group>

                            <Form.Group as={Col} md={6} className="mb-3" controlId="Apellidos">
                                <Form.Label><b>Apellidos:</b></Form.Label>
                                <Form.Control
                                    required
                                    value={apellidos}
                                    onChange={e => setApellidos(e.target.value)}
                                    className='border'
                                    type="text"
                                    name='apellidos'
                                    placeholder='Apellidos'
                                />
                                {errors.apellidos && <div className="text-danger">{errors.apellidos}</div>}
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="Email">
                            <Form.Label><b>Correo electrónico:</b></Form.Label>
                            <Form.Control
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className='border'
                                type="email"
                                name='email'
                                placeholder="usuario@ejemplo.com"
                            />
                        </Form.Group>

                        <Row>
                            <Form.Group as={Col} md={4} className="mb-3" controlId="Telefono">
                                <Form.Label><b>Teléfono:</b></Form.Label>
                                <InputGroup>
                                    <InputGroup.Text id="inputGroupPrepend">+56</InputGroup.Text>
                                    <Form.Control
                                        required
                                        value={telefono}
                                        onChange={e => setTelefono(e.target.value)}
                                        className='border'
                                        type="number"
                                        name='telefono'
                                        placeholder='9 87654321'
                                    />
                                </InputGroup>
                                {errors.telefono && <div className="text-danger">{errors.telefono}</div>}
                            </Form.Group>

                            <Form.Group as={Col} md={4} className="mb-3" controlId="Direccion">
                                <Form.Label><b>Dirección:</b></Form.Label>
                                <Form.Control
                                    required
                                    value={direccion}
                                    onChange={e => setDireccion(e.target.value)}
                                    className='border'
                                    type="text"
                                    name='direccion'
                                    placeholder='Comuna, N° casa'
                                />
                                {errors.direccion && <div className="text-danger">{errors.direccion}</div>}
                            </Form.Group>

                            <Form.Group as={Col} md={4} className="mb-3" controlId="FechaNacimiento">
                                <Form.Label><b>Fecha Nacimiento:</b></Form.Label>
                                <Form.Control
                                    required
                                    value={fecha_nacimiento}
                                    onChange={e => setFecha_nacimiento(e.target.value)}
                                    className='border'
                                    type="date"
                                    name='fecha_nacimiento'
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} md={6} className="mb-3" controlId="Password">
                                <Form.Label><b>Contraseña:</b></Form.Label>
                                <Form.Control
                                    required
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className='border'
                                    type="password"
                                    pattern='.{8,}'
                                    name='password'
                                    placeholder="Contraseña"
                                />
                                {errors.password && <div className="text-danger">{errors.password}</div>}
                            </Form.Group>

                            <Form.Group as={Col} md={6} className="mb-3" controlId="Password2">
                                <Form.Label><b>Repetir Contraseña:</b></Form.Label>
                                <Form.Control
                                    required
                                    value={password2}
                                    onChange={e => setPassword2(e.target.value)}
                                    className='border'
                                    type="password"
                                    pattern='.{8,}'
                                    name='password2'
                                    placeholder="Repetir Contraseña"
                                />
                                {errors.password2 && <div className="text-danger">{errors.password2}</div>}
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
