import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <div
      key={nome}
      style={{
        border: '2px solid',
        padding: '10px',
        margin: '0 0 20px 0',
      }}
    >
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
