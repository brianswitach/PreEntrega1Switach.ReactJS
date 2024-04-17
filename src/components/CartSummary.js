import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartSummary = () => {
  const { state } = useContext(CartContext);
  
  return (
    <div>
      {state.items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${item.price}
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${state.total}</p>
    </div>
  );
};

export default CartSummary;
