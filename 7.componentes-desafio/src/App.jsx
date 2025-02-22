import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {
  const { pathname } = window.location

  const page = (pathname) => {
    if (pathname === '/produtos') {
      return <Produtos />;
    } else {
      return <Home />;
    }
  };

  return (
    <>
      <Header />
      {page(pathname)}
    </>
  );
};

export default App;
