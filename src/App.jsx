import React, { useState } from "react";
import ListaProductos from "./components/ListaProductos";
import CarritoModal from "./components/CarritoModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarritoProvider from "./context/CarritoContext";
import TemaProvider from "./context/TemaContext";

function App() {
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  return (
    <TemaProvider>
      <CarritoProvider>
        <div className="min-h-screen bg-white text-black transition dark:bg-gray-900 dark:text-white">
          <Header onToggleCarrito={() => setMostrarCarrito((prev) => !prev)} />
          <main>
            <ListaProductos />
          </main>
          {mostrarCarrito && (
            <CarritoModal onClose={() => setMostrarCarrito(false)} />
          )}
          <Footer />
        </div>
      </CarritoProvider>
    </TemaProvider>
  );
}

export default App;








