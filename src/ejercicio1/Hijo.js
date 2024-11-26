import React from 'react';

const Hijo = ({ producto, onAgregar }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', textAlign: 'center' }}>
      <h3>{producto.nombre}</h3>
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }} 
      />
      <p>Precio: ${producto.precio}</p>
      <button onClick={() => onAgregar(producto)}>Agregar al carrito</button>
    </div>
  );
};

export default Hijo;
