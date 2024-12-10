import React, { useState } from 'react';
import './index.css';
import FormularioLibro from './components/FormularioLibro';
import TablaLibros from './components/TablaLibros';

function App() {
  const [libros, setLibros] = useState([]);

  const agregarLibro = (libro) => {
    setLibros([...libros, libro]);
  };

  return (
    <div>
      <h1>Gestión de Libros</h1>
      <FormularioLibro agregarLibro={agregarLibro} />
      <TablaLibros libros={libros} />
    </div>
  );
}

export default App;
