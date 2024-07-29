import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PersonCircle, Search, ChevronRight } from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Dropdown } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import '../index.css';


const CustomDropdown = () => {
    return (
        <NavDropdown className="navbar3" title="Comunidad" id="navbarScrollingDropdown">
            <NavDropdown.ItemText>Adopción</NavDropdown.ItemText>
            <NavDropdown.Item eventKey="4.1">Perros</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Gatos</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Otros</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Colaboradores</NavDropdown.Item>
        </NavDropdown>
    )
}

const CustomSearch = () => {
    return (
        <Form className="d-flex">
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
    )
}

const Avatar = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const { auth, CerrarSesion } = useAuth();

    if (props.page === '/Login') {
        return null;
    } else {
        if (Object.keys(auth).length === 0) {
            return (
                <Navbar.Brand href='/Login'>
                    <PersonCircle size={38} />
                </Navbar.Brand>
            )
        } else {
            return (
                <Dropdown>
                    <Dropdown.Toggle 
                        className={`d-flex justify-center items-center border-0 ${isFocused ? 'bg-white' : 'bg-white'}`} 
                        variant='outline-dark' 
                        onFocus={() => setIsFocused(true)} 
                        id="dropdown-basic">
                        {auth.imagen 
                            ? <Image width={44} className='rounded-circle' src={`http://146.83.198.35:1273/uploads/${auth.imagen}`} /> 
                            : <PersonCircle size={38} />}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/usuario">Perfil</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Configuracion</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="" onClick={CerrarSesion}>Cerrar sesión</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    }
}

Avatar.propTypes = {
    page: PropTypes.string,
};

const Header = () => {
    let location = useLocation();
    return (
        <Navbar className="navbar2 fixed-top" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <Image src='/logo3.jpg' width={80} height={80} rounded />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <CustomDropdown className="nabvar3"/>
                        <Nav.Link href="/denuncias">Denuncias</Nav.Link>
                        <Nav.Link href="/nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="/contacto">Contacto</Nav.Link>
                    </Nav>
                    <CustomSearch />
                    <Avatar page={location.pathname} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;
