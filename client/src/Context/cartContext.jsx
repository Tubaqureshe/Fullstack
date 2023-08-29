import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the cart
let initialCart = {
  items: [],
};

if (localStorage.getItem('cartItems')) {
  try {
    const items = JSON.parse(localStorage.getItem('cartItems'));
    initialCart = { items: items.items };

  } catch (error) { }
}

// Reducer function to manage cart actions
const cartReducer = (state, action) => {
  let modifiedState = state;
  switch (action.type) {
    case 'ADD_ITEM':
      if (state.items.findIndex(p => p._id === action.payload._id) >= 0) {
        modifiedState = {
          ...state,
          items: state.items.map(item =>
            item._id === action.payload._id ? { ...item, quantity: (action.payload.quantity ? item.quantity + action.payload.quantity : item.quantity + 1) } : item
          ),
        }
      } else {
        modifiedState = {
          ...state,
          items: [...state.items, action.payload],
        };

      }

      localStorage.setItem('cartItems', JSON.stringify(modifiedState))
      return modifiedState;

    case 'REMOVE_ITEM':
      modifiedState = {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
      };

      localStorage.setItem('cartItems', JSON.stringify(modifiedState))
      return modifiedState;

    case 'UPDATE_QUANTITY':
      modifiedState = {
        ...state,
        items: state.items.map(item =>
          item._id === action.payload._id ? { ...item, quantity: action.payload.quantity } : item
        ),
      };

      localStorage.setItem('cartItems', JSON.stringify(modifiedState))
      return modifiedState;

    case 'DELETE_CART':
      modifiedState = {
        ...state,
        items: [],
      }
      localStorage.setItem('cartItems', JSON.stringify(modifiedState))
      return modifiedState;

    default:
      return state;
  }
};

// Create CartContext
const CartContext = createContext();

// Create CartProvider component
export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCart);

  return <CartContext.Provider value={{ cartState, cartDispatch }}>{children}</CartContext.Provider>;
}


// Custom hook to use CartContext
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}