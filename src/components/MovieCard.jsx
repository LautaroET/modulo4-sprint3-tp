import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function MovieCard({ movie }) {
  const { agregarAlCarrito } = useContext(CarritoContext);

  return (
    <div className="
      bg-white p-4 rounded-xl text-gray-800 text-center
      shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300
      dark:bg-gray-800 dark:text-gray-100 dark:shadow-xl dark:hover:shadow-2xl
      flex flex-col // Añadido para mejor control del layout interno
    ">
      {/* Contenedor de la imagen para asegurar que se muestre bien */}
      <div className="w-full h-60 md:h-72 lg:h-80 overflow-hidden rounded-md mb-4 flex items-center justify-center"> {/* Aumentamos la altura */}
        <img
          src={movie.imagen}
          alt={`Portada de ${movie.name}`} // Mejoramos el alt text
          className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500 rounded-md" // Clave para la imagen
        />
      </div>

      <h3 className="text-2xl font-bold text-indigo-700 dark:text-blue-400 mb-2 truncate">{movie.name}</h3> {/* Aumentamos tamaño y añadimos truncate */}
      <p className="text-3xl font-extrabold text-lime-600 dark:text-emerald-400 mb-4">${movie.price}</p> {/* Aumentamos tamaño */}

      <button
        onClick={() => agregarAlCarrito(movie)}
        className="mt-auto w-full py-3 bg-green-600 text-white font-semibold rounded-lg
                  hover:bg-green-700 transition-colors duration-300
                  dark:bg-emerald-700 dark:hover:bg-emerald-600
                   shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" // Efectos adicionales para el botón
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default MovieCard;








