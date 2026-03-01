import React from 'react';

// Componente para mostrar las secciones principales en la página de inicio, con botones para navegar a cada sección
const HomeSections = ({ setSeccion }) => {

  // Renderizamos dos tarjetas para las secciones de Videojuegos y Anime, cada una con un botón que actualiza la sección actual al hacer clic
  return (
    <main className="container my-5 text-center">
      <h1 className="display-5 fw-bold text-info mb-4">Explora el Contenido</h1>
      <div className="row g-4 justify-content-center">
        <div className="col-12 col-md-5">
          <div className="card bg-dark text-light h-100 p-4 shadow border-secondary card-neon">
            <h3>VIDEOJUEGOS</h3>
            <p>Análisis de juegos, desde clásicos hasta novedades.</p>
            <button onClick={() => setSeccion('videojuegos')} className="btn btn-primary mt-3">Ver Videojuegos</button>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="card bg-dark text-light h-100 p-4 shadow border-secondary card-neon">
            <h3>ANIME</h3>
            <p>Reseñas y recomendaciones del mundo del anime.</p>
            <button onClick={() => setSeccion('anime')} className="btn btn-primary mt-3">Ver Anime</button>
          </div>
        </div>
      </div>
    </main>
  );
};

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación, como en App.jsx
export default HomeSections;