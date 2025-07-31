import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existente = prev.find((item) => item.id === producto.id);
      if (existente) {
        return prev.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...producto, quantity: 1 }];
      }
    });
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, cantidad) } : item
      )
    );
  };

  const vaciarCarrito = () => setCarrito([]);

  const precioTotal = carrito.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        actualizarCantidad,
        vaciarCarrito,
        precioTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;





