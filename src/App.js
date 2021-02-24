import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  // Definir la categoria y noticias
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=afb066c0be634e1782589f6455b0af35`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }
    consultarApi();
  }, [categoria]);

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
