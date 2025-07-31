import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const addToCart = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((item) => item.id === producto.id);
      if (existe) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...producto, quantity: 1 }];
    });
  };

  const removeFromCart = (id) =>
    setCarrito((prev) => prev.filter((item) => item.id !== id));

  const updateQuantity = (id, cantidad) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, cantidad) } : item
      )
    );
  };

  const clearCart = () => setCarrito([]);

  const totalPrice = carrito.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};


