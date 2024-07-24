import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './pages/user/Login';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Denuncias from './pages/denuncias/Denuncias';
import CustomCarousel from './components/Carousel';
import DenunciaDetails from './pages/denuncias/DenunciaDetails';
import DenunciaForm from './pages/denuncias/DenunciaForm';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AuthLayout />}>
            <Route path='/' element={<CustomCarousel />} />
            <Route path='/login' element={<Login />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/denuncias' element={<Denuncias />} />
            <Route path="/denuncias/:id" element={<DenunciaDetails />} />
            <Route path="/denunciasform" element={<DenunciaForm/>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
