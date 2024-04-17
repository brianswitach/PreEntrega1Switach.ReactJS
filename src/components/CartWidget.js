import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  const { state } = useContext(CartContext);
  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon icon={faShoppingCart} style={{ color: 'white', marginRight: '5px' }} />
      <div style={{ color: 'white' }}>Cart</div>
      <div style={{ color: 'white', marginLeft: '5px' }}>({state.items.reduce((acc, item) => acc + item.quantity, 0)})</div>
    </Link>
  );
};

export default CartWidget;
