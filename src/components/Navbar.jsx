import React from 'react';

// CIRUGÍA: Agregamos 'seccionActual' a las props para poder comparar
const Navbar = ({ setSeccion, cantidadCarrito, seccionActual }) => {
  
  // Función para determinar si el botón debe verse "activo"
  const obtenerEstilo = (nombre) => {
    return seccionActual === nombre 
      ? "nav-link btn text-info fw-bold border-bottom border-info" // Estilo Activo
      : "nav-link btn"; 
  };

  // Renderizamos la barra de navegación con botones que cambian de estilo según la sección activa. También mostramos un badge con la cantidad de artículos en el carrito si es mayor a cero.
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-secondary">
      <div className="container">
        {/*// CIRUGÍA: Convertimos el título en un botón para que también cambie a la sección de inicio al hacer clic */}
        <button className="navbar-brand fw-bold btn btn-link text-decoration-none" onClick={() => setSeccion('inicio')}>
          SEKHMET
        </button>
        
        {/*// Botón para colapsar el menú en pantallas pequeñas */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* CIRUGÍA: Agregamos la clase 'ms-auto' para alinear los botones a la derecha y 'align-items-center' para centrar verticalmente el badge del carrito*/}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <button className={obtenerEstilo('inicio')} onClick={() => setSeccion('inicio')}>Inicio</button>
            </li>
            <li className="nav-item">
              <button className={obtenerEstilo('videojuegos')} onClick={() => setSeccion('videojuegos')}>Videojuegos</button>
            </li>
            <li className="nav-item">
              <button className={obtenerEstilo('anime')} onClick={() => setSeccion('anime')}>Anime</button>
            </li>
            <li className="nav-item">
              {/* Quitamos el text-info fijo de aquí para que solo brille cuando se este en la tienda */}
              <button className={obtenerEstilo('ventas')} onClick={() => setSeccion('ventas')}>
                Tienda
                {cantidadCarrito > 0 && (
                  <span className="badge rounded-pill bg-danger ms-2" style={{ fontSize: '0.7rem' }}>
                    {cantidadCarrito}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;