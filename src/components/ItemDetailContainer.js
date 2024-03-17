import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { id } = useParams(); 

  

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Detalle del Producto {id}</h2>
      {}
    </div>
  );
}

export default ItemDetailContainer;
