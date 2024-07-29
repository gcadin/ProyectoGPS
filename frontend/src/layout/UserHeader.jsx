import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { PersonCircle} from 'react-bootstrap-icons';
import { useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';


const Avatar = () => {

    const [isFocused, setIsFocused] = useState(false);
    const { auth, CerrarSesion } = useAuth();
        
    return (
        <Dropdown>
          <Dropdown.Toggle className={`flex justify-center items-center border-0 text-black ${isFocused ? 'bg-white': 'bg-white'} `} variant='outline-dark' onFocus={() => setIsFocused(true)} id="dropdown-basic">
            {auth.imagen ? <Image width={44} className='rounded-3xl' src={`http://146.83.198.35:1273/uploads/${auth.imagen}`} ></Image> :<PersonCircle size={38}/>}
          </Dropdown.Toggle>
            
          <Dropdown.Menu className='bg-white text-black'>
            <Dropdown.Item href="/usuario">Perfil</Dropdown.Item>
            <Dropdown.Item href="#">Configuracion</Dropdown.Item>
            <hr className='mb-0 mt-1'/>
            <Dropdown.Item href='/' onClick={CerrarSesion}>Cerrar sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    );
}


const UserHeader = ( ) => {
    let location = useLocation();
    return(
        <>
            <Navbar bg='white' className='mt-3 pb-0 flex-col'>
                <Container className='flex'>
                    <Navbar.Brand href="/" >
                        <Image src='/logo3.jpg' width={80} height={80}  rounded/>{''}
                    </Navbar.Brand>
                    <Avatar page={location.pathname}/>
                </Container>
                <Container className='justify-center bg-greenaqua mx-0 max-w-full'>
                <div style={{
                  borderTop: '1px solid #13C1CC', // Color y grosor de la línea
                  width: '100%', // Ancho de la línea, puedes ajustarlo como desees
                  margin: '15px 0px', // Espaciado superior e inferior
                  padding: '0px'                }} />
                </Container>
            </Navbar>
            
        </>
    )
}

export default UserHeader;