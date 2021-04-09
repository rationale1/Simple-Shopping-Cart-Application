import React, { createContext, useReducer } from "react";
import img1 from "../Images/images.jpg";
import img2 from "../Images/prof.jpg";
import img3 from "../Images/images-4.jpg";

// Application Initial State
const initState = {
  products: [
    { id: 1, name: "MacBook", price: 1400, img: img1 },
    { id: 2, name: "Old Car", price: 2400, img: img2 },
    { id: 3, name: "W Shoes", price: 1000, img: img3 },
  ],
  cartItems: [],
};

// Shop Reducer Function
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      const product = state.products.find(prod => prod.id === payload.id);

      const inCart = state.cartItems.find(item => item.id === payload.id);

      return {
        ...state,
        cartItems: inCart
          ? state.cartItems.map(item =>
              item.id === payload.id ? { ...item, qty: item.qty + 1 } : item,
            )
          : [...state.cartItems, { ...product, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      const filteredItem = state.cartItems.filter(
        item => item.id !== payload.id,
      );

      return {
        ...state,
        cartItems: filteredItem,
      };

    case "INCREASE_QTY":
      const increaseQty = state.cartItems.map(item =>
        item.id === payload.id ? { ...item, qty: item.qty + 1 } : item,
      );

      return {
        ...state,
        cartItems: increaseQty,
      };

    case "DECREASE_QTY": {
      const decreaseQty = state.cartItems.map(item =>
        item.id === payload.id ? { ...item, qty: item.qty - 1 } : item,
      );

      return {
        ...state,
        cartItems: decreaseQty,
      };
    }

    default:
      return state;
  }
};

// Create Context
export const ShopProvider = createContext();

const ShoppingContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const addToCart = id => dispatch({ type: "ADD_TO_CART", payload: { id } });

  const increment = id => dispatch({ type: "INCREASE_QTY", payload: { id } });

  const decrement = id => dispatch({ type: "DECREASE_QTY", payload: { id } });

  const removeFromCart = id =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });

  return (
    <ShopProvider.Provider
      value={{ state, addToCart, removeFromCart, increment, decrement }}>
      {children}
    </ShopProvider.Provider>
  );
};

export default ShoppingContext;
