import { useState, useEffect } from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Button from 'react-bootstrap/Button';
import { List, PlusCircle, FileText, ChevronDown, X, HouseDoorFill, ExclamationOctagonFill, HeartFill } from 'react-bootstrap-icons';

const UserSideBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const toggleSidebar = () => {
    setIsAnimating(true);
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 100); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Actualiza el estado basado en el tamaño de la ventana
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarStyles = {
    width: '200px',
    height: '100%',
    backgroundColor: '#13C1CC',
    color: '#fff',
    position: isMobile ? 'absolute' : (isVisible ? 'relative' : 'absolute'),
    left: isMobile ? (isVisible ? '0' : '-200px') : (isVisible ? '0' : '-200px'),
    transform: isMobile ? 'translateX(0)' : (isVisible ? 'translateX(0)' : 'translateX(-100%)'),
    transition: 'transform 0.3s ease-in-out, position 0.3s ease-in-out',
    zIndex: 1050,
  };

  const containerStyles = {
    display: 'flex',
    position: 'relative',
    width: 'auto',
    height: '100%',
  };

  const buttonStyles = {
    position: 'absolute',
    top: '-33px',
    zIndex: 1060,
  };

  return (
    <div style={containerStyles}>
      <Button onClick={toggleSidebar} className="m-0 bg-transparent text-white border-0" style={buttonStyles}>
        {isVisible ? <X size={24} /> : <List size={24} />}
      </Button>

      <div style={sidebarStyles}>
        <SidebarMenu>
          <SidebarMenu.Body className='mt-3'>
            <SidebarMenu.Nav className="mb-3">
              <SidebarMenu.Nav.Link href='/' className="flex ml-2 text-white items-center font-bold" style={{ textDecoration: 'none' }}>
                <SidebarMenu.Nav.Icon>
                  <HouseDoorFill style={{ fill: 'currentColor' }}/>
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title className='ml-2'>
                  <span>Inicio</span>
                </SidebarMenu.Nav.Title>
              </SidebarMenu.Nav.Link>
            </SidebarMenu.Nav>
            <hr className='mt-0'/>
            <SidebarMenu.Sub className="mb-3">
              <SidebarMenu.Sub.Toggle className="flex justify-center items-center ml-2 text-white font-bold">
                <SidebarMenu.Nav.Icon className="mr-2">
                  <HeartFill />
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                  <span>Mascotas</span>
                </SidebarMenu.Nav.Title>
                <SidebarMenu.Nav.Icon className="ml-2">
                  <ChevronDown />
                </SidebarMenu.Nav.Icon>
              </SidebarMenu.Sub.Toggle>
              <SidebarMenu.Sub.Collapse>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link 
                    href='/usuario/registrarMascota' 
                    className="flex items-center ml-4 my-1 text-white" 
                    style={{ textDecoration: 'none' }}>
                    <SidebarMenu.Nav.Icon>
                      <PlusCircle />
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title className='ml-2'>
                      <span>Registrar</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link href='/usuario/listarMascotasUsuario' className="flex items-center ml-4 my-1 text-white" style={{ textDecoration: 'none' }}>
                    <SidebarMenu.Nav.Icon>
                      <List />
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title className='ml-2'>
                      <span>Listar</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
              </SidebarMenu.Sub.Collapse>
            </SidebarMenu.Sub>
            <hr />
            <SidebarMenu.Sub className="mb-3">
              <SidebarMenu.Sub.Toggle className="flex justify-center items-center ml-2 text-white font-bold">
                <SidebarMenu.Nav.Icon className="mr-2">
                  <ExclamationOctagonFill />
                </SidebarMenu.Nav.Icon>
                <SidebarMenu.Nav.Title>
                  <span>Denuncias</span>
                </SidebarMenu.Nav.Title>
                <SidebarMenu.Nav.Icon className="ml-2">
                  <ChevronDown />
                </SidebarMenu.Nav.Icon>
              </SidebarMenu.Sub.Toggle>
              <SidebarMenu.Sub.Collapse>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link className="flex items-center ml-4 my-1 text-white" style={{ textDecoration: 'none' }}>
                    <SidebarMenu.Nav.Icon>
                      <FileText />
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title className='ml-2'>
                      <span>Registrar</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
                <SidebarMenu.Nav>
                  <SidebarMenu.Nav.Link className="flex items-center ml-4 my-1 text-white" style={{ textDecoration: 'none' }}>
                    <SidebarMenu.Nav.Icon>
                      <List />
                    </SidebarMenu.Nav.Icon>
                    <SidebarMenu.Nav.Title className='ml-2'>
                      <span>Listar</span>
                    </SidebarMenu.Nav.Title>
                  </SidebarMenu.Nav.Link>
                </SidebarMenu.Nav>
              </SidebarMenu.Sub.Collapse>
            </SidebarMenu.Sub>
          </SidebarMenu.Body>
        </SidebarMenu>
      </div>
    </div>
  );
};

export default UserSideBar;
