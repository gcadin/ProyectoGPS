import{ BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layout/AuthLayout'
import Login from './pages/user/Login'
import Contacto from './pages/Contacto'
import Nosotros from './pages/Nosotros'
import CustomCarousel from './components/Carousel'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout/> }>
            <Route path='/' element={<> <CustomCarousel/> </>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    

    </>
  )
}

export default App
