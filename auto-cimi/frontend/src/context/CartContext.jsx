import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // Load from localStorage on init
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem('autocimi_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [cartOpen, setCartOpen] = useState(false);

  // Sync with localStorage
  useEffect(() => {
    localStorage.setItem('autocimi_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const totalCount = cartItems.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  const addToCart = useCallback((part) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i._id === part._id);
      if (existing) {
        return prev.map((i) => i._id === part._id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...part, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((i) => i._id !== id));
  }, []);

  const updateQty = useCallback((id, qty) => {
    if (qty < 1) {
      setCartItems((prev) => prev.filter((i) => i._id !== id));
    } else {
      setCartItems((prev) => prev.map((i) => i._id === id ? { ...i, qty } : i));
    }
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  return (
    <CartContext.Provider value={{
      cartItems, cartOpen, setCartOpen,
      totalCount, totalPrice,
      addToCart, removeFromCart, updateQty, clearCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart duhet të përdoret brenda CartProvider');
  return ctx;
};
