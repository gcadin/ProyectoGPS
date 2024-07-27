import{ BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layout/AuthLayout'
import Login from './pages/user/Login'
import RegisterForm from './pages/user/Registrar'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import CustomCarousel from './components/Carousel'
import RegistrarMascota from './pages/mascotas/registrarMascota'

import EditarMascota from './pages/mascotas/editarMascota'

import { AuthProvider } from './context/AuthProvider'
import Perfil from './pages/user/Perfil'
import UserNav from './layout/UserNav'
import MascotasListUser from './pages/mascotas/listarMascotasUsuario'
import EditarPerfil from './pages/user/EditarPerfil'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<AuthLayout/> }>
              <Route path='/' element={<> <CustomCarousel/> </>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/registro' element={<RegisterForm/>}/>
              <Route path='/nosotros' element={<Nosotros/>}/>
              <Route path='/contacto' element={<Contacto/>}/>
            </Route>

            <Route path='/usuario' element={<UserNav/>}>
              <Route index element={<Perfil/>}/>
              <Route path='/usuario/editarPerfil' element={<EditarPerfil/>}/>
              <Route path='/usuario/registrarMascota' element={<RegistrarMascota/>}/>
              <Route path='/usuario/listarMascotasUsuario' element={<MascotasListUser/>}/>
              <Route path='/usuario/editarMascota/:id' element={<EditarMascota/>}/>

            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}


export default App
