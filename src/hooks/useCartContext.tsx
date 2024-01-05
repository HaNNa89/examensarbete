import { createContext, useContext, useState } from 'react';

interface Product {
  id: number;
  price: number;
}

interface CartItem extends Product {}

interface CartContext {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  calculateTotal: () => number;
}

const CartContext = createContext<CartContext>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  calculateTotal: () => 0,
});

// eslint-disable-next-line react-refresh/only-export-components
export function useCart(): CartContext {
  return useContext(CartContext);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const cartValues: CartContext = {
    cartItems,
    addToCart,
    removeFromCart,
    calculateTotal,
  };

  return (
    <CartContext.Provider value={cartValues}>{children}</CartContext.Provider>
  );
}
