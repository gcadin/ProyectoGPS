import React from 'react';
import DenunciaList from '../../components/DenunciaList';
import DenunciarButton from '../../components/DenunciarButton';
import '../../index.css';

const Denuncias = () => {
  return (
    <div>
      <div className='button-style'><DenunciarButton/> </div>
       
      <DenunciaList />
    </div>
  );
};

export default Denuncias;
