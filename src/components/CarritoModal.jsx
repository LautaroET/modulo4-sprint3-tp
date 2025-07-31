import React, { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function CarritoModal({ onClose }) {
  const { carrito, removeFromCart, updateQuantity, totalPrice, clearCart } =
    useContext(CarritoContext);

  return (
    <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-blue-400">Mi Carrito</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl font-bold">
            ×
          </button>
        </div>

        {carrito.length === 0 ? (
          <p className="text-gray-300">El carrito está vacío.</p>
        ) : (
          <ul className="space-y-4">
            {carrito.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-gray-700 p-3 rounded-md"
              >
                <span className="text-white">{item.name}</span>
                <div className="flex gap-2 items-center">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-600 px-2 rounded">
                    -
                  </button>
                  <span className="text-white">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-600 px-2 rounded">
                    +
                  </button>
                  <span className="ml-4 text-white">${item.price * item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 ml-4">
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 text-right">
          <p className="text-lg font-bold text-white">Total: ${totalPrice}</p>
          {carrito.length > 0 && (
            <button onClick={clearCart} className="mt-2 bg-red-700 px-4 py-2 rounded">
              Vaciar carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarritoModal;


