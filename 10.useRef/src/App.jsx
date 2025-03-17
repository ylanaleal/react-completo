import React from 'react';

const App = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    setComentarios((comentarios) => [...comentarios, input]);
    setInput('');
    inputElement.current.focus();
  };

  const handleDelete = () => {
    setComentarios([]);
    inputElement.current.focus();
  };

  return (
    <>
    <h1>Lista de comentários</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputElement}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
        <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
          Limpar
        </button>
        <ul>
          {comentarios.map((comentario, index) => (
            <li key={index}>{comentario}</li>
          ))}
        </ul>
      </form>
    </>
  );
};

export default App;
