import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  items: [], 
  total: 0  
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let updatedItems = [...state.items];
      let newTotal = state.total;

      if (existingCartItemIndex >= 0) {
       
        updatedItems[existingCartItemIndex] = {
          ...updatedItems[existingCartItemIndex],
          quantity: updatedItems[existingCartItemIndex].quantity + 1
        };
        newTotal += parseFloat(action.payload.price); 
      } else {
        
        updatedItems.push({ ...action.payload, quantity: 1 });
        newTotal += parseFloat(action.payload.price); 
      }

      return {
        ...state,
        items: updatedItems,
        total: newTotal
      };
    }
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
