import React, { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

function Header({ onToggleCarrito }) {
  const { temaOscuro, alternarTema } = useContext(TemaContext);

  return (
    <header className="w-full bg-blue-700 shadow-xl p-4 flex justify-between items-center transition-colors duration-700
                      dark:bg-indigo-900">
      <div className="flex items-center gap-3">
        <img
          src={"/img/palomitas-de-maiz.png"}
          alt="Logo de Tienda de Películas"
          className="w-16 h-16 object-contain"
        />
        <h1 className="text-white text-2xl font-extrabold tracking-wide">
          Tienda de <span className="text-amber-300">Películas</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Botón para alternar el tema */}
        <button
          onClick={alternarTema}
          className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 hover:scale-105 transition-transform duration-300"
        >
          {temaOscuro ? (
            <i className="bi bi-sun-fill text-xl"></i>
          ) : (
            <i className="bi bi-moon-fill text-xl"></i>
          )}
        </button>

        {/* Botón para abrir/cerrar el carrito */}
        <button
          onClick={onToggleCarrito}
          className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300 flex items-center hover:scale-105 transition-transform duration-300"
        >
          Ver Carrito
          <svg className="w-7 h-7 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;




