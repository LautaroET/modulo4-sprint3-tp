Aplicación WatchList
Esta es una aplicación sencilla en React que permite a los usuarios explorar una lista de películas, agregarlas a una lista de seguimiento personal y gestionar su lista de seguimiento. Los datos de la lista de seguimiento se conservan utilizando localStorage.

Tabla de Contenidos
Características

Instalación

Uso

Componentes

Estructura del Proyecto

Contribución

Licencia

Características
Explorar Películas: Muestra una lista curada de películas.

Añadir a la Lista de Seguimiento: Los usuarios pueden añadir películas a su lista de seguimiento personal.

Eliminar de la Lista de Seguimiento: Las películas pueden ser eliminadas de la lista de seguimiento.

Lista de Seguimiento Persistente: Los datos de la lista de seguimiento se guardan en el almacenamiento local del navegador, por lo que persisten entre sesiones.

Diseño Responsivo: (Asumido en base al uso de Tailwind CSS).

Instalación
Para poner este proyecto en marcha en tu máquina local, sigue estos pasos:

Clona el repositorio:

Bash

git clone <tu-url-del-repositorio>
cd <tu-carpeta-del-proyecto>
Instala las dependencias:

Bash

npm install
# o
yarn install
Uso
Para iniciar el servidor de desarrollo:

Bash

npm run dev
# o
yarn dev
Esto normalmente abrirá la aplicación en tu navegador en http://localhost:5173 (o en otro puerto disponible).

Componentes
La aplicación está estructurada en varios componentes reutilizables de React:

App.jsx
Este es el componente principal de la aplicación. Gestiona el estado global de la lista de seguimiento y la visibilidad del modal de la lista de seguimiento.

Estado:

watchlist: Un array de objetos de películas que el usuario ha añadido a su lista de seguimiento. Este estado se inicializa desde localStorage y se sincroniza con localStorage en cada cambio.

isModalOpen: Un booleano que controla la visibilidad del WatchlistModal.

Funciones:

addToWatchlist(movie): Añade un objeto movie dado a la watchlist, evitando duplicados. Actualiza localStorage.

removeFromWatchlist(id): Elimina una película con el id especificado de la watchlist. Actualiza localStorage.

toggleModal(): Alterna el estado isModalOpen para mostrar u ocultar el WatchlistModal.

Renderiza: Header, MovieList, Footer y WatchlistModal (condicionalmente).

components/Header.jsx
El encabezado de la aplicación, que muestra el título/logo de la aplicación y un botón para abrir el modal de la lista de seguimiento.

Props:

toggleModal: Función a llamar cuando se hace clic en el botón "My Watch List".

isModalOpen: Booleano que indica si el modal está actualmente abierto, usado para cambiar el icono SVG en el botón.

components/Footer.jsx
Un componente de pie de página sencillo, típicamente utilizado para información de derechos de autor o créditos.

components/MovieList.jsx
Muestra una cuadrícula de películas disponibles. Cada película se renderiza usando el componente MovieCard.

Props:

addToWatchlist: Función pasada a MovieCard para manejar la adición de una película a la lista de seguimiento.

Fuente de Datos: Importa pelicula de ../utils/pelicula.js para obtener la lista de películas.

components/MovieCard.jsx
Representa una película individual en la MovieList. Muestra la imagen, el nombre de la película y un botón para añadirla a la lista de seguimiento.

Props:

movie: Un objeto que contiene los detalles de la película (id, name, imagen).

onAdd: Función a llamar cuando se hace clic en el botón "Agregar a Mi Lista", pasando el objeto movie.

components/WatchlistModal.jsx
Un componente modal que muestra la lista de películas en la lista de seguimiento del usuario. Permite a los usuarios eliminar películas de su lista.

Props:

watchlist: El array de objetos de películas actualmente en la lista de seguimiento del usuario.

removeFromWatchlist: Función a llamar cuando se hace clic en el botón "Remover" de una película, pasando el ID de la película.

onClose: Función a llamar cuando se hace clic en el botón de cerrar del modal (&times;).

components/Button.jsx
Un componente de botón reutilizable con estilos comunes y efectos de transición.

Props:

onClick: Función a ejecutar cuando se hace clic en el botón.

children: El contenido a mostrar dentro del botón (por ejemplo, texto).

utils/pelicula.js
Este archivo exporta un array llamado pelicula, que contiene una lista predefinida de objetos de películas con propiedades id, name e imagen. Esto sirve como fuente de datos estática para las películas disponibles en la aplicación.

Estructura del Proyecto
├── public/
│   └── src/assets/img/  # Imágenes de películas y otros activos
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   └── WatchlistModal.jsx
│   ├── utils/
│   │   └── pelicula.js # Datos de películas
│   ├── App.jsx         # Componente principal de la aplicación
│   └── main.jsx        # Punto de entrada para la aplicación React
├── .gitignore
├── index.html
├── package.json
├── README.md           # Este archivo
└── vite.config.js