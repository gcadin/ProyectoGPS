import Container from "react-bootstrap/esm/Container";
import useAuth from "../../hooks/useAuth";
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserSideBar from "../../layout/userSideBar";
import { Button} from "react-bootstrap";
import { PencilSquare, TrashFill, Search } from 'react-bootstrap-icons';
import axios from 'axios';
import UserTable from "../../components/UserTable";
import { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import MascotasTable from "../../components/MascotasTable";
import { popError, popSuccess } from '../../utils/popUp';

const PanelAdmin = () => {
    return(
        <>
            <TablaUsuarios />
            <TablaMascotas />
        </>
    )
    
}

const TablaUsuarios = () =>{
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.get('http://146.83.198.35:1273/api/usuarios');
            console.log('API Response:', response.data);
            setUsuarios(response.data);
          } catch (err) {
            console.error('API Error:', err);
          }
        };
    
        fetchUsers();
      }, []);

    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    
    const filteredUsers = usuarios
    .filter(user =>
        user.nombre.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = async (userId) => {
        try {
          await axios.delete(`http://146.83.198.35:1273/api/usuarios/${userId}`);
          popSuccess('Eliminado Correctamente');
          window.location.reload();
        } catch (err) {
          popError('No se ah logrado eliminar');
          console.error('API Error:', err);
        }
    };
    return (
        
            <Card className="border rounded p-2 m-2">
                <Card className="border-0 flex flex-col justify-between">
                    <h4>Usuarios registrados</h4>
                    <hr />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroupPrepend"><Search /></InputGroup.Text>
                        <input type="text" placeholder="Buscar por nombre" value={search} onChange={handleSearch} className="form-control border"/>
                    </InputGroup>
                       
                    

            <UserTable users={filteredUsers} onDelete={handleDelete}/>
                </Card>
            </Card>
            
        
       
    )

}

const TablaMascotas = () =>{
    const [mascotas, setMascotas] = useState([]);

    useEffect(() => {
        const fetchMascotas = async () => {
            try {
                const response = await axios.get('http://146.83.198.35:1273/api/mascotas');
                console.log('API Response:', response.data);
                setMascotas(response.data);
            } catch (err) {
                console.error('API Error:', err);
            }
        };

        fetchMascotas();
    }, []);

    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredMascotas = mascotas
        .filter(mascota =>
            mascota.nombre.toLowerCase().includes(search.toLowerCase())
        );

    const handleDelete = async (mascotaId) => {
        try {
            await axios.delete(`http://146.83.198.35:1273/api/mascotas/${mascotaId}`);
            popSuccess('Eliminado Correctamente');
            window.location.reload();
        } catch (err) {
            popError('No se ah logrado eliminar');
            console.error('API Error:', err);
        }
    };

    return (
        <>
            <Card className="border rounded p-2 m-2">
                <Card className="border-0 flex flex-col justify-between">
                    <h4>Listado de Mascotas</h4>
                    <hr />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroupPrepend"><Search /></InputGroup.Text>
                        <input type="text" placeholder="Buscar por nombre" value={search} onChange={handleSearch} className="form-control border"/>
                    </InputGroup>

                    <MascotasTable mascotas={filteredMascotas} onDelete={handleDelete}/>
                </Card>
            </Card>
        </>
    );
}

const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const year = date.getFullYear();
    return `${day + 1} de ${month} de ${year}`;
  };

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Perfil = () => {
    const { auth } = useAuth();

    

    const handleDelete = async () => {
        try {
          await axios.delete(`http://146.83.198.35:1273/api/usuarios/${auth._id}`);
          location.reload();
        } catch (err) {
          console.error('API Error:', err);
        }
      };

      const EliminarCuenta = () => {
        return(
            <Card className="border-0 items-center">
                <Button href="/" onClick={handleDelete} variant="danger" className="flex items-center">
                    <TrashFill className="mr-2" /> Eliminar cuenta
                </Button>
            </Card>
        );
      }

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: '0 0 auto' }}>
                <UserSideBar />
            </div>
            <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                <Container className='flex-grow-1 p-2'>
                    <Card className="border rounded p-2 m-2">
                        <Card className="border-0 flex flex-row justify-between items-center">
                            <h4>Información del Usuario</h4>
                            <Button href="/usuario/editarPerfil" className="border bg-transparent text-black">
                                <PencilSquare />
                            </Button>
                            
                        </Card>
                        <hr />
                        <Row>
                            <Card as={Col} md={5} className='border-0 m-2'>
                                <h6><b>Nombre:</b> {capitalizeFirstLetter(auth.nombre)}</h6>
                                <h6><b>Correo Electronico:</b> {auth.email}</h6>
                                <h6><b>Telefono:</b>(+56) {auth.telefono}</h6>
                            </Card>
                            <Card as={Col} md={5} className='border-0 m-2'>
                                <h6><b>Apellidos:</b> {capitalizeFirstLetter(auth.apellidos)}</h6>
                                <h6><b>Fecha de nacimiento:</b> {formatDate(auth.fecha_nacimiento)}</h6>
                                <h6><b>Dirección:</b> {auth.direccion}</h6>
                            </Card>
                        </Row>
                    </Card>

                    {auth.rol == 'admin' ? <PanelAdmin/>: <EliminarCuenta/>}
                        
                    
                </Container>
            </div>
        </div>
    )
}

export default Perfil;
