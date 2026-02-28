import React from 'react';

// 💉 CIRUGÍA: Recibimos 'cantidadCarrito' además de 'setSeccion'
const Navbar = ({ setSeccion, cantidadCarrito }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-secondary">
      <div className="container">
        {/* Cambié 'ventas' por 'inicio' para que el logo te lleve al Home real */}
        <button className="navbar-brand fw-bold btn btn-link text-decoration-none" onClick={() => setSeccion('inicio')}>
          SEKHMET
        </button>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              {/* Botón Inicio: Ahora apunta a la sección 'inicio' de tu App.js */}
              <button className="nav-link btn" onClick={() => setSeccion('inicio')}>Inicio</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setSeccion('videojuegos')}>Videojuegos</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setSeccion('anime')}>Anime</button>
            </li>
            <li className="nav-item">
              <button className="nav-link text-info fw-bold btn d-flex align-items-center" onClick={() => setSeccion('ventas')}>
                Tienda
                {/* 🛒 Renderizado Condicional: Solo muestra el círculo rojo si hay algo en el carrito */}
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