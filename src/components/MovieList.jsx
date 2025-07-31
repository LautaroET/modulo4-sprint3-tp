import React from "react";
import { products } from "../utils/products"; // Importamos 'products' desde utils
import MovieCard from "./MovieCard"; // Cambié TarjetaProducto a MovieCard

// Componente que muestra la lista de películas/productos disponibles.
function MovieList() { // `addToWatchlist` ya no es un prop aquí, se maneja con Context.
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((movie) => ( // Cambié 'producto' a 'movie'
        <MovieCard key={movie.id} movie={movie} /> // Pasamos 'movie'
      ))}
    </div>
  );
}

export default MovieList;






