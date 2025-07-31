import React, { useContext } from "react";
import { TemaContexto } from "../context/TemaContexto";

function BotonTema() {
  const { oscuro, toggleTheme } = useContext(TemaContexto);
  return (
    <button
      onClick={toggleTheme}
      className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
    >
      Cambiar a {oscuro ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
}

export default BotonTema;

