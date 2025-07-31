import React, { createContext, useState, useEffect } from "react";

export const TemaContext = createContext();

const TemaProvider = ({ children }) => {
  // Estado para el tema oscuro, inicializado desde localStorage.
  const [temaOscuro, setTemaOscuro] = useState(() => {
    // Intenta cargar el valor guardado. Si no hay nada, por defecto es falso (tema claro).
    const guardado = localStorage.getItem("temaOscuro");
    // console.log("Valor de temaOscuro al iniciar (desde localStorage):", guardado, JSON.parse(guardado)); // <-- DEBUG
    return guardado ? JSON.parse(guardado) : false;
  });

  // Este useEffect se ejecuta cada vez que 'temaOscuro' cambia.
  useEffect(() => {
    // Primero, guarda el nuevo estado en localStorage.
    localStorage.setItem("temaOscuro", JSON.stringify(temaOscuro));
    // console.log("Tema actualizado, guardando en localStorage:", temaOscuro); // <-- DEBUG

    // Luego, manipula la clase 'dark' en el elemento <html>.
    if (temaOscuro) {
      document.documentElement.classList.add('dark');
      // console.log("Clase 'dark' añadida al <html>."); // <-- DEBUG
    } else {
      document.documentElement.classList.remove('dark');
      // console.log("Clase 'dark' eliminada del <html>."); // <-- DEBUG
    }
  }, [temaOscuro]); // Dependencia: re-ejecuta cuando temaOscuro cambia.

  // Función para alternar el valor de 'temaOscuro'.
  const alternarTema = () => {
    setTemaOscuro((prev) => {
      // console.log("Alternando tema. Valor previo:", prev, "Nuevo valor:", !prev); // <-- DEBUG
      return !prev;
    });
  };

  return (
    <TemaContext.Provider value={{ temaOscuro, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export default TemaProvider;


