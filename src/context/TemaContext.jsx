import React, { createContext, useState, useEffect } from "react";

export const TemaContext = createContext();

const TemaProvider = ({ children }) => {
  const [temaOscuro, setTemaOscuro] = useState(() => {
    const guardado = localStorage.getItem("temaOscuro");
    return guardado ? JSON.parse(guardado) : false;
  });

  useEffect(() => {
    localStorage.setItem("temaOscuro", JSON.stringify(temaOscuro));
  }, [temaOscuro]);

  const alternarTema = () => setTemaOscuro((prev) => !prev);

  return (
    <TemaContext.Provider value={{ temaOscuro, alternarTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export default TemaProvider;


