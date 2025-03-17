import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);
  if (global.dados === null) return null;
  return (
    <div>
      {global.dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
      <button onClick={global.limparDados}>Limpar</button>
    </div>
  );
};

export default Produto;
