import Container from "react-bootstrap/esm/Container";
import useAuth from "../../hooks/useAuth";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserSideBar from "../../layout/userSideBar";

const Perfil = () => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const { auth } = useAuth();

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: '0 0 auto' }}>
                <UserSideBar />
            </div>
            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                <Container className='flex-grow-1 p-2'>
                    <Card className="border rounded p-2 m-2">
                        <h4>Información del Usuario</h4>
                        <hr />
                        <Row>
                            <Card as={Col} md={5} className='border-0 m-2'>
                                <h6><b>Nombre:</b> {capitalizeFirstLetter(auth.nombre)}</h6>
                                <h6><b>Correo Electronico:</b> {auth.email}</h6>
                                <h6><b>Telefono:</b>(+56) {auth.telefono}</h6>
                            </Card>
                            <Card as={Col} md={5} className='border-0 m-2'>
                                <h6><b>Apellidos:</b> {capitalizeFirstLetter(auth.apellidos)}</h6>
                                <h6><b>Fecha de nacimiento:</b> {auth.fecha_nacimiento}</h6>
                                <h6><b>Dirección:</b> {auth.direccion}</h6>
                            </Card>
                        </Row>
                    </Card>
                </Container>
            </div>
        </div>
    )
}

export default Perfil;
