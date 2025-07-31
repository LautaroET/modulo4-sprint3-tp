import React from "react";

function Header({ onToggleCarrito }) {
  return (
    <header className="w-full bg-blue-950 shadow-lg p-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
            src={"/public/img/palomitas-de-maiz.png"}
            alt="Logo de Watchlist"
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-white text-2xl font-extrabold tracking-wide">
          Tienda de<span className="text-sky-300"> Películas</span>
          </h1>
      </div>
      <button onClick={onToggleCarrito}
        className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-300 flex items-center cursor-pointer"
      >
        Ver Carrito
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>
    </header>
  );
}

export default Header;



