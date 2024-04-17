// ItemDetail.js

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const addItemToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
  };

  return (
    <div style={{ margin: '20px' }}>
      <h3 style={{ marginBottom: '10px', fontFamily: 'Arial, sans-serif' }}>{product.name}</h3>
      <img src={product.imgURL} alt={product.name} style={{ width: '450px', height: '300px', marginBottom: '20px' }} />
      <img src={product.imgURL2} alt={product.name} style={{ width: '450px', height: '300px', marginBottom: '20px', marginLeft: '20px'}} />
      <img src={product.imgURL3} alt={product.name} style={{ width: '450px', height: '300px', marginBottom: '20px', marginLeft: '20px'}} />
      <p style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>{product.description}</p>
      <p style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>Precio: ${product.price}</p>
      <button onClick={addItemToCart} className="btn btn-success" style={{ marginRight: '10px' }}>Agregar al Carrito</button>
      <Link to="/" className="btn btn-danger">Volver</Link>
    </div>
  );
};

export default ItemDetail;
