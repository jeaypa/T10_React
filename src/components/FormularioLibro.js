import React, { useState } from 'react';

const FormularioLibro = ({ agregarLibro }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    agregarLibro({ titulo, autor });
    setTitulo('');
    setAutor('');
  };

  return (
    <form onSubmit={manejarEnvio} style={{ marginBottom: '20px' }}>
      <div>
        <label>Título: </label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>
      <div>
        <label>Autor: </label>
        <input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
      </div>
      <button type="submit">Agregar Libro</button>
    </form>
  );
};

export default FormularioLibro;
