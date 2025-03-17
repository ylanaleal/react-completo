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
      <div style={{ width: '600px' }}>
        <h1>Lista de comentários</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            ref={inputElement}
          />
          <br />
          <div style={{ marginBottom: '30px' }}>
            <button onClick={handleClick}>Enviar</button>
            <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
              Limpar
            </button>
          </div>
          <h3>Comentários</h3>
          <ul style={{ padding: '0' }}>
            {comentarios.map((comentario, index) => (
              <li
                key={index}
                style={{
                  padding: '20px',
                  marginTop: '15px',
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                  listStyle: 'none',
                  wordWrap: 'break-word',
                  overflow: 'hidden',
                }}
              >
                {comentario}
              </li>
            ))}
          </ul>
        </form>
      </div>
    </>
  );
};

export default App;
