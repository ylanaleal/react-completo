import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <h3>Produtos:</h3>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
