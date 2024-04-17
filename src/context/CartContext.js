// CartContext.js
import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  items: [], // Un arreglo de ítems del carrito
  total: 0   // El total acumulado del carrito
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Revisar si el ítem ya existe en el carrito
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let updatedItems = [...state.items];
      let newTotal = state.total;

      if (existingCartItemIndex >= 0) {
        // Si ya existe, incrementa la cantidad y calcula el nuevo total
        updatedItems[existingCartItemIndex] = {
          ...updatedItems[existingCartItemIndex],
          quantity: updatedItems[existingCartItemIndex].quantity + 1
        };
        newTotal += parseFloat(action.payload.price); // Convierte el precio a un número flotante
      } else {
        // Si no existe, añade el ítem al carrito con cantidad 1 y actualiza el total
        updatedItems.push({ ...action.payload, quantity: 1 });
        newTotal += parseFloat(action.payload.price); // Convierte el precio a un número flotante
      }

      return {
        ...state,
        items: updatedItems,
        total: newTotal
      };
    }
    // ...otros casos para el reducer...
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
