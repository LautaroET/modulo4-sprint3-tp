
import React from "react";
import { products } from "../utils/products";
import MovieCard from "./MovieCard";

function MovieList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 py-12 max-w-7xl mx-auto">
      {products.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;






