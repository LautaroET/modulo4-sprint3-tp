import React, { useState} from "react";
import MovieList from "./components/MovieList";
import WatchlistModal from "./components/WatchlistModal";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarritoProvider from "./context/CarritoContext"; // Mantengo CarritoProvider porque no hay un equivalente en el estilo dado para TemaContext.
import TemaProvider from "./context/TemaContext"; // Mantengo TemaProvider por la misma razón.

// Componente principal de la aplicación.
function App() {
  // Estado para controlar la visibilidad del modal del carrito.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para alternar la visibilidad del modal.
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <TemaProvider>
      <CarritoProvider>
        <div className="min-h-screen bg-white text-black transition dark:bg-gray-900 dark:text-white">
          {/* Encabezado con botón para abrir/cerrar el modal del carrito y alternar tema */}
          <Header onToggleCarrito={toggleModal} />
          <main>
            {/* Lista de productos disponibles para agregar al carrito */}
            <MovieList />
          </main>
          {/* Modal del carrito visible si isModalOpen es true */}
          {isModalOpen && (
            <WatchlistModal onClose={toggleModal} />
          )}
          {/* Pie de página */}
          <Footer />
        </div>
      </CarritoProvider>
    </TemaProvider>
  );
}

export default App;








