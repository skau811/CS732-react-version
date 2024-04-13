import React from "react";
import { useState } from "react";
export const AppContext = React.createContext({});

export function AppContextProvider({ children }) {
  const [shoppingCart, setCart] = useState([]);

  function addToCart(pokemon) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === pokemon.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === pokemon.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pokemon, quantity: 1 }];
      }
    });
  }

  function removeFromCart(pokemon) {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.name === pokemon.name
      );
      if (existingItemIndex !== -1) {
        const existingItem = prevCart[existingItemIndex];
        if (existingItem.quantity > 1) {
          return prevCart.map((item) =>
            item.name === pokemon.name
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        } else {
          return prevCart.filter((item) => item.name !== pokemon.name);
        }
      }
      return prevCart;
    });
  }

  function clearCart() {
    setCart([]);
  }

  const context = {
    shoppingCart,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
