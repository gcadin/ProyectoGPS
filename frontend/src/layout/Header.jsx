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

const CustomDropdown = () => {
    return (
        <NavDropdown title="Comunidad" className='text-white'>
            <NavDropdown.ItemText className='font-bold py-0 text-white'>Adopción</NavDropdown.ItemText>
            <NavDropdown.Item className='text-white flex items-center' eventKey="4.1"><ChevronRight/> Perros</NavDropdown.Item>
            <NavDropdown.Item className='text-white flex items-center' eventKey="4.2"><ChevronRight/>Gatos</NavDropdown.Item>
            <NavDropdown.Item className='text-white flex items-center' eventKey="4.3"><ChevronRight/>Otros</NavDropdown.Item>
            <NavDropdown.Divider color='white' />
            <NavDropdown.Item className='text-white flex items-center' eventKey="4.4"><ChevronRight/>Colaboradores</NavDropdown.Item>
        </NavDropdown>
    )
}

const CustomSearch = () => {
    return(
        <Form className=''>
            <div className='relative w-null flex border rounded'>
                <Form.Control  type='search' placeholder='Buscar' />
                <Button variant='transparent' type='submit'>
                    <Search/>
                </Button>
            </div>
        </Form>
    )
}

const Avatar = (props) => {
    if (props.page === '/Login') {
        return null;
    }else{
        return(
            <Navbar.Brand href='/Login'>
                <PersonCircle size={38}/>
            </Navbar.Brand>
        )
    }
}
Avatar.propTypes = {
    page: PropTypes.string,
};


const Header = ( ) => {
    let location = useLocation();
    return(
        <>
            <Navbar bg='white' className='mt-3 pb-0 flex-col'>
                <Container className='flex'>
                    <Navbar.Brand href="/" >
                        <Image src='/logo3.jpg' width={80} height={80}  rounded/>{''}
                    </Navbar.Brand>
                    <CustomSearch/>
                    <Avatar page={location.pathname}/>
                </Container>
                <Container className='justify-center bg-greenaqua mx-0 max-w-full'>
                    <Nav  variant='underline' defaultActiveKey={location.pathname}>
                        <Nav.Link className='text-white' href='/'>Inicio</Nav.Link>
                        <CustomDropdown/>
                        <Nav.Link className='text-white' href='/denuncias'>Denuncias</Nav.Link>
                        <Nav.Link className='text-white' href='/nosotros'>Nosotros</Nav.Link>
                        <Nav.Link className='text-white' href='/contacto'>Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    )
}

export default Header;