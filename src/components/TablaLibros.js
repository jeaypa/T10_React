import React from 'react';

const TablaLibros = ({ libros }) => {
  return (
    <table border="1" style={{ width: '100%', textAlign: 'left' }}>
      <thead>
        <tr>
          <th>Título</th>
          <th>Autor</th>
        </tr>
      </thead>
      <tbody>
        {libros.map((libro, index) => (
          <tr key={index}>
            <td>{libro.titulo}</td>
            <td>{libro.autor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaLibros;
