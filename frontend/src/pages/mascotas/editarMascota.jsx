import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserSideBar from '../../layout/userSideBar';
import { popSuccess2, popError } from '../../utils/popUp';

const EditarMascota = () => {
    const { id } = useParams();
    const [mascota, setMascota] = useState({
        nombre: '',
        edad: '',
        tamano: '',
        especie: '',
        raza: '',
        esterilizacion: '',
        vacunas: [],
        vacunas2: '',
        descripcion: '',
        imagen: [],
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const GetInf = async () => {
            try {
                const response = await axios.get(`http://146.83.198.35:1273/api/mascotas/${id}`);
                console.log('API Response:', response.data);
                setMascota(response.data);
            } catch (err) {
                console.error('API Error:', err);
            }
        };

        GetInf();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMascota(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleRadioChange = (e) => {
        setMascota(prevState => ({
            ...prevState,
            especie: e.target.value
        }));
    };

    const handleSelectChange = (e) => {
        setMascota(prevState => ({
            ...prevState,
            esterilizacion: e.target.value
        }));
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setMascota(prevState => {
            const vacunas = checked
                ? [...prevState.vacunas, value]
                : prevState.vacunas.filter(vacuna => vacuna !== value);

            return {
                ...prevState,
                vacunas
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (mascota.nombre.length < 2) {
            newErrors.nombre = 'Nombre inválido';
        }

        if (mascota.especie === '') {
            newErrors.especie = 'Seleccione una especie por favor';
        }

        if (mascota.especie === 'perro' && mascota.tamano > 250) {
            newErrors.tamano = 'Excede tamaño máximo para perros';
        }

        if (mascota.especie === 'gato' && mascota.tamano > 80) {
            newErrors.tamano = 'Excede tamaño máximo para gatos';
        }

        if (mascota.especie === 'perro' && mascota.edad > 25) {
            newErrors.edad = 'Excede máximo de esperanza de vida para perros';
        }

        if (mascota.especie === 'gato' && mascota.edad > 20) {
            newErrors.edad = 'Excede máximo de esperanza de vida para gatos';
        }

        if (mascota.raza.length > 30) {
            newErrors.raza = 'Demasiados caracteres';
        }

        if (mascota.esterilizacion === '') {
            newErrors.esterilizacion = 'Seleccione al menos una opción';
        }

        if (mascota.vacunas2.length === 0) {
            newErrors.vacunas2 = 'Se desconoce información';
        }

        if (mascota.descripcion.length === 0) {
            newErrors.descripcion = 'No existe información';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const url = `http://146.83.198.35:1273/api/mascotas/${mascota._id}`;
            await axios.put(url, mascota);
            popSuccess2('Información actualizada Correctamente');
        } catch (err) {
            popError('Lo sentimos:(. No hemos podido actualizar la información. Por favor intentelo mas tarde');
            console.log(err);
        }
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: '0 0 auto' }}>
                <UserSideBar />
            </div>
            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                <Container className='w-100 flex justify-center mt-3 p-2'>
                    <Form className='w-100 border rounded m-3 p-4' onSubmit={handleSubmit}>
                        <label className='text-2xl'>Formulario Registro Mascota</label>
                        <hr />
                        <Form.Group className="mb-3" controlId="formBasicNombre">
                            <Form.Label>Nombre Mascota:</Form.Label>
                            <Form.Control
                                required
                                value={mascota.nombre}
                                className='border'
                                type="text"
                                name="nombre"
                                onChange={handleChange}
                            />
                            {errors.nombre && <div className="text-danger">{errors.nombre}</div>}
                        </Form.Group>
                        <Row>
                            <Form.Group className="mb-3" as={Col} md='6' controlId="formBasicEdad">
                                <Form.Label>Edad:</Form.Label>
                                <Form.Control
                                    value={mascota.edad}
                                    className='border'
                                    type="number"
                                    placeholder="Edad (años)"
                                    name="edad"
                                    onChange={handleChange}
                                />
                                {errors.edad && <div className="text-danger">{errors.edad}</div>}
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} md='6' controlId="formBasicTamano">
                                <Form.Label>Tamaño:</Form.Label>
                                <Form.Control
                                    value={mascota.tamano}
                                    className='border'
                                    type="number"
                                    placeholder="Tamaño (centímetros)"
                                    name="tamano"
                                    onChange={handleChange}
                                />
                                {errors.tamano && <div className="text-danger">{errors.tamano}</div>}
                            </Form.Group>
                        </Row>

                        <Form.Group as={Col} className="mb-3" controlId="formBasicEspecie">
                            <Form.Label>Especie:</Form.Label>
                            <div className='flex justify-evenly'>
                                <Form.Check
                                    checked={mascota.especie === 'perro'}
                                    onChange={handleRadioChange}
                                    className='pr-3'
                                    type='radio'
                                    value='perro'
                                    id='perro'
                                    name='especie'
                                    label='Perro'
                                />
                                <Form.Check
                                    checked={mascota.especie === 'gato'}
                                    onChange={handleRadioChange}
                                    className='pr-3'
                                    type='radio'
                                    value='gato'
                                    id='gato'
                                    name='especie'
                                    label='Gato'
                                />
                                <Form.Check
                                    checked={mascota.especie === 'otro'}
                                    onChange={handleRadioChange}
                                    className='pr-3'
                                    type='radio'
                                    value='otro'
                                    id='otro'
                                    name='especie'
                                    label='Otro'
                                />
                            </div>
                            {errors.especie && <div className="text-danger text-center">{errors.especie}</div>}
                        </Form.Group>

                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="raza">
                                <Form.Label>Raza:</Form.Label>
                                <Form.Control
                                    value={mascota.raza}
                                    className='border'
                                    type="text"
                                    placeholder="(Si corresponde)"
                                    name="raza"
                                    onChange={handleChange}
                                />
                                {errors.raza && <div className="text-danger">{errors.raza}</div>}
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="Esterilizada">
                                <Form.Label>Esterilizada:</Form.Label>
                                <Form.Select
                                    value={mascota.esterilizacion}
                                    onChange={handleSelectChange}
                                    className='border'
                                    name="esterilizacion"
                                >
                                    <option>Seleccione según corresponda...</option>
                                    <option value='Si'>Si</option>
                                    <option value='No'>No</option>
                                    <option value='No se sabe'>No se sabe</option>
                                </Form.Select>
                                {errors.esterilizacion && <div className="text-danger">{errors.esterilizacion}</div>}
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="Vacunas">
                                <Form.Label>Vacunas Antirrabicas:</Form.Label>
                                <Form.Check
                                    checked={mascota.vacunas.includes('2 Meses')}
                                    onChange={handleCheckboxChange}
                                    className='pr-3'
                                    value='2 Meses'
                                    type='checkbox'
                                    id='1'
                                    label='2 Meses'
                                />
                                <Form.Check
                                    checked={mascota.vacunas.includes('3 Meses')}
                                    onChange={handleCheckboxChange}
                                    className='pr-3'
                                    value='3 Meses'
                                    type='checkbox'
                                    id='2'
                                    label='3 Meses'
                                />
                                <Form.Check
                                    checked={mascota.vacunas.includes('4 Meses')}
                                    onChange={handleCheckboxChange}
                                    className='pr-3'
                                    value='4 Meses'
                                    type='checkbox'
                                    id='3'
                                    label='4 Meses (solo perros)'
                                />
                                <Form.Check
                                    checked={mascota.vacunas.includes('6 Meses')}
                                    onChange={handleCheckboxChange}
                                    className='pr-3'
                                    value='6 Meses'
                                    type='checkbox'
                                    id='4'
                                    label='6 Meses'
                                />
                                <Form.Check
                                    checked={mascota.vacunas.includes('12 Meses')}
                                    onChange={handleCheckboxChange}
                                    className='pr-3'
                                    value='12 Meses'
                                    type='checkbox'
                                    id='5'
                                    label='12 Meses'
                                />
                            </Form.Group>

                            <Form.Group as={Col} className="mb-3" controlId="Vacunas2">
                                <Form.Label>Vacunas Adicionales:</Form.Label>
                                <Form.Control
                                    value={mascota.vacunas2}
                                    className='border'
                                    as='textarea'
                                    placeholder="Vacunas anuales, según tratamiento u otro..."
                                    name="vacunas2"
                                    onChange={handleChange}
                                />
                                {errors.vacunas2 && <div className="text-danger">{errors.vacunas2}</div>}
                            </Form.Group>
                        </Row>

                        <Form.Group>
                            <Form.Label>Descripción:</Form.Label>
                            <Form.Control
                                value={mascota.descripcion}
                                className='border'
                                as='textarea'
                                placeholder="Descripción de la mascota"
                                name="descripcion"
                                onChange={handleChange}
                            />
                            {errors.descripcion && <div className="text-danger">{errors.descripcion}</div>}
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
    );
};

export default EditarMascota;
