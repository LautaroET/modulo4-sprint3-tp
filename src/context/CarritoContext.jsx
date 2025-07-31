import { createContext, useState, useEffect } from "react";

export const CarritoContext = createContext();

// Proveedor de contexto para gestionar el carrito de compras.
const CarritoProvider = ({ children }) => {
  // Estado del carrito, inicializado desde localStorage.
  const [carrito, setCarrito] = useState(() => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
  });

  // Efecto para guardar el carrito en localStorage cada vez que cambia.
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Agrega un producto al carrito o incrementa su cantidad si ya existe.
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

  // Elimina un producto del carrito por su ID.
  const eliminarDelCarrito = (id) => {
    setCarrito((prev) => prev.filter((item) => item.id !== id));
  };

  // Actualiza la cantidad de un producto específico en el carrito.
  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, cantidad) } : item
      )
    );
  };

  // Vacía completamente el carrito.
  const vaciarCarrito = () => setCarrito([]);

  // Calcula el precio total de todos los productos en el carrito.
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





