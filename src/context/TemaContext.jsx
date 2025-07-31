import React, { createContext, useState, useEffect } from "react";

export const TemaContext = createContext();

// Proveedor de contexto para gestionar el tema (claro/oscuro) de la aplicación.
const TemaProvider = ({ children }) => {
  // Estado para el tema oscuro, inicializado desde localStorage.
  const [temaOscuro, setTemaOscuro] = useState(() => {
    const guardado = localStorage.getItem("temaOscuro");
    return guardado ? JSON.parse(guardado) : false;
  });

  // Efecto para guardar el estado del tema en localStorage cada vez que cambia.
  useEffect(() => {
    localStorage.setItem("temaOscuro", JSON.stringify(temaOscuro));
  }, [temaOscuro]);

  // Función para alternar el tema.
  const alternarTema = () => setTemaOscuro((prev) => !prev);

  return (
    <TemaContext.Provider value={{ temaOscuro, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export default TemaProvider;


