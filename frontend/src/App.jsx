import{ BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layout/AuthLayout'
import LoginForm from './pages/user/Login'
import RegisterForm from './pages/user/Registrar'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import CustomCarousel from './components/Carousel'
import RegistrarMascota from './pages/mascotas/registrarMascota'
import DenunciaList from './pages/denuncias/Denuncias'
import MascotasList from './pages/mascotas/listarMascotas'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout/> }>
            <Route path='/' element={<> <CustomCarousel/> </>}/>
            <Route path='/registrarMascota' element={<RegistrarMascota/>}/>
            <Route path='/listarMascotas' element={<MascotasList/>}/>
            <Route path='/denuncias' element={<DenunciaList/>}/>
            <Route path='/login' element={<LoginForm/>}/>
            <Route path='/registro' element={<RegisterForm/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
