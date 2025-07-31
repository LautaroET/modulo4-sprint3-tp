import React from "react";
import { products } from "../utils/products";
import TarjetaProducto from "./TarjetaProducto";

function ListaProductos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((producto) => (
        <TarjetaProducto key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ListaProductos;






