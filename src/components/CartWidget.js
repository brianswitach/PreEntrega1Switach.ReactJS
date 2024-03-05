import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div style={{ position: 'relative', cursor: 'pointer' }}>
      <FaShoppingCart />
      <span style={{
        position: 'absolute',
        top: -10,
        right: -10,
        padding: '5px 10px',
        borderRadius: '50%',
        background: 'red',
        color: 'white',
        fontSize: '0.8em'
      }}>
        3 {}
      </span>
    </div>
  );
}

export default CartWidget;
