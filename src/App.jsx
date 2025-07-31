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
        {/* Ajustamos el degradado del fondo para el modo claro */}
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800 transition-colors duration-700
                        dark:from-gray-950 dark:to-blue-950 dark:text-gray-100">
          <Header onToggleCarrito={toggleModal} />
          <main>
            <MovieList />
          </main>
          {isModalOpen && (
            <WatchlistModal onClose={toggleModal} />
          )}
          <Footer />
        </div>
      </CarritoProvider>
    </TemaProvider>
  );
}

export default App;








