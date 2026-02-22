import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();
const url = import.meta.env.VITE_API_URL;
const API = `${url}/cart`;


const getGuestId = () => {
  let id = localStorage.getItem("guestId");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("guestId", id);
  }
  return id;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const guestId = getGuestId();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${API}/${guestId}`);
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error("Cart fetch error", err);
    }
  };

  const addToCart = async (product) => {
    try {
      const res = await axios.post(`${API}/add`, {
        guestId,
        product,
      });
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Add to cart error", err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      const res = await axios.post(`${API}/remove`, {
        guestId,
        id,
      });
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Remove error", err);
    }
  };

  const updateQuantity = async (id, quantity) => {
    try {
      const res = await axios.post(`${API}/update`, {
        guestId,
        id,
        quantity,
      });
      setCartItems(res.data.items);
    } catch (err) {
      console.error("Update error", err);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("guestId");
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);