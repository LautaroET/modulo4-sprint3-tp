import React from "react";

/**
 * Componente Footer que muestra información de derechos de autor y detalles del proyecto.
 * Utiliza Tailwind CSS para los estilos.
 */
function Footer() {
  return (
    // Elemento footer con un fondo azul oscuro, contenido centrado y padding vertical.
    <footer className="bg-blue-950 flex justify-center py-4">
      {/* Contenedor para el contenido del footer, con márgenes horizontales automáticos para centrar y padding horizontal. */}
      <div className="container mx-auto px-4 text-center">
        {/* Texto de derechos de autor con tamaño de fuente responsivo, peso medio y espaciado de letras amplio. */}
        <p className="text-lg md:text-xl font-medium tracking-wide">
          &copy; <span className="text-sky-300">Watcht List</span> - Desarrollado por{" "}
          <span className="text-sky-300">Lautaro Tapia</span> - 2025
        </p>
        {/* Texto de detalles del proyecto con un tamaño de fuente más pequeño, margen superior y color gris. */}
        <p className="text-sm mt-1 text-gray-400">
          Módulo 4 - Sprint 2 Trabajo Práctico
        </p>
      </div>
    </footer>
  );
}

export default Footer;

