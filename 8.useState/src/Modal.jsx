import React from 'react';

const Modal = ({ modal, setModal }) => {
  if (modal === true)
    return <div style={{ marginBottom: '15px' }}>Esse é um modal.</div>;
  return null;
};

export default Modal;
