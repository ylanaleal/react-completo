import React from 'react';

const ButtonModal = ({ modal, setModal }) => {
  const handleClick = () => {
    setModal((ativo) => !ativo);
  };

  return <button onClick={handleClick}>{modal ? 'Fechar' : 'Abrir'}</button>;
};

export default ButtonModal;
