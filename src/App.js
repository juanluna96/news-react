import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // Definir la categoria y noticias
  const [categoria, setCategoria] = useState('');

  return (
    <Fragment>
      <Header titulo="Buscador de noticias"></Header>

      <div className="container white">
        <Formulario setCategoria={ setCategoria }></Formulario>
      </div>
    </Fragment>
  );
}

export default App;
