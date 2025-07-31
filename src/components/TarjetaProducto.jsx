import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function TarjetaProducto({ producto }) {
  const { addToCart } = useContext(CarritoContext);

  return (
    <div className="bg-gray-800 p-4 rounded-xl text-white text-center">
      <img 
        src={producto.imagen}
        alt={producto.name}
        className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 text-lg font-bold">{producto.name}</h3>
      <p className="text-sky-400">${producto.price}</p>
      <button
        onClick={() => addToCart(producto)}
        className="mt-2 bg-blue-700 px-4 py-2 rounded hover:bg-blue-500 transition cursor-pointer"
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default TarjetaProducto;







