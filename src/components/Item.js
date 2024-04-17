import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item" style={{ marginBottom: '60px'}}>
      <h3>{product.name}</h3>
      {}
      <img src={product.imgURL} alt={product.name} style={{ width: '450px', height: '300px' }} />
      <p>Precio: ${product.price}</p>
      <Link to={`/item/${product.id}`} className="btn btn-success">Ver detalles</Link>
    </div>
  );
};

export default Item;
