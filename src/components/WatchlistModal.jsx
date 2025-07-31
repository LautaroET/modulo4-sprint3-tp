import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function WatchlistModal({ onClose }) {
  const {
    carrito,
    eliminarDelCarrito,
    actualizarCantidad,
    vaciarCarrito,
    precioTotal,
  } = useContext(CarritoContext);

  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto transition-colors duration-700
                      dark:bg-gray-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-indigo-700 dark:text-blue-400">Mi Carrito</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl font-bold dark:text-gray-400 dark:hover:text-white">
            ×
          </button>
        </div>

        {carrito.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300 text-center py-8">El carrito está vacío. ¡Añade algunas películas!</p>
        ) : (
          <ul className="space-y-4">
            {carrito.map((item) => (
              <li key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-md shadow-sm transition-colors duration-500
                                          dark:bg-gray-700">
                {/* AÑADE LA IMAGEN AQUÍ */}
                <div className="flex items-center gap-3">
                  <img src={item.imagen} alt={item.name} className="w-12 h-16 object-cover rounded" /> {/* Tamaño más pequeño para la imagen del carrito */}
                  <span className="text-gray-800 font-medium dark:text-gray-100">{item.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => actualizarCantidad(item.id, item.quantity - 1)} className="bg-gray-200 px-2 rounded text-gray-700 hover:bg-gray-300 transition-colors dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500">-</button>
                  <span className="text-gray-800 dark:text-gray-100 font-semibold">{item.quantity}</span>
                  <button onClick={() => actualizarCantidad(item.id, item.quantity + 1)} className="bg-gray-200 px-2 rounded text-gray-700 hover:bg-gray-300 transition-colors dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500">+</button>
                  <span className="ml-4 text-emerald-600 dark:text-emerald-400 font-semibold">${item.price * item.quantity}</span>
                  <button onClick={() => eliminarDelCarrito(item.id)} className="text-red-500 hover:text-red-700 ml-4 transition-colors dark:text-red-400 dark:hover:text-red-300">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 text-right">
          <p className="text-2xl font-bold text-indigo-700 dark:text-blue-400">Total: ${precioTotal}</p>
          {carrito.length > 0 && (
            <button onClick={vaciarCarrito} className="mt-4 bg-red-600 px-5 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors duration-300
                                          dark:bg-red-700 dark:hover:bg-red-600">
              Vaciar carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WatchlistModal;




