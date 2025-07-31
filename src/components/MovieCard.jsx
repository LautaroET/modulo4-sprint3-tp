import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

// Componente individual que representa una tarjeta de película/producto.
function MovieCard({ movie }) { // Cambié 'producto' a 'movie' para seguir la nomenclatura del ejemplo.
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <div className="bg-gray-800 p-4 rounded-xl text-white text-center dark:bg-gray-700">
      <img
        src={movie.imagen}
        alt={movie.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-bold">{movie.name}</h3>
      <p className="text-sky-400">${movie.price}</p>
      <button
        onClick={() => agregarAlCarrito(movie)} // Usamos 'movie' aquí.
        className="mt-2 bg-blue-700 px-4 py-2 rounded hover:bg-blue-500 transition cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-400"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default MovieCard;








