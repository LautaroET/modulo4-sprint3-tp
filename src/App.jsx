// App.js
import React, { useState } from "react";
import { CarritoProvider } from "./context/CarritoContext";
import ListaProductos from "./components/ListaProductos";
import CarritoModal from "./components/CarritoModal";
import Header from "./components/Header";

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  return (
    <CarritoProvider>
      <div className="min-h-screen bg-white text-black transition">
        <Header onToggleCarrito={() => setMostrarCarrito((prev) => !prev)}/>
        <main>
          <ListaProductos />
        </main>
        {mostrarCarrito && <CarritoModal onClose={() => setMostrarCarrito(false)} />}
      </div>
    </CarritoProvider>
  );
}

export default App;






