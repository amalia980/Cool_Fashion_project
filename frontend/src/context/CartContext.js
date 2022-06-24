import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const [heartList, setHeartList] = useState([]);

  return (
    <>
      <CartContext.Provider
        value={{ cart, setCart, cartVisible, setCartVisible,heartList, setHeartList }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}
