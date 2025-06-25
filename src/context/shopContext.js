import { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId) => {
    if (!cartItems?.find((item) => item.id === itemId)) {
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === itemId ? { ...item, count: item.count + 1 } : item
        )
      );
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === itemId
          ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]); // 🧹 Clear the cart
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};
