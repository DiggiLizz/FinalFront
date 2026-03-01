import React from 'react';

// Componente de pie de página con información de contacto y créditos finales
const Footer = () => {
  // Renderizamos el pie de página con un diseño oscuro, centrado y con un borde superior. Incluye los créditos finales y un enlace de contacto por correo electrónico.
  return (
    <footer id="contacto" className="bg-dark text-center py-5 border-top border-secondary mt-5">
      <div className="container">
        {/* Sección de Créditos Finales */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <p className="mb-1 text-light">
              © 2026 Videojuegos <strong>Sekhmet</strong>
            </p>
            <p className="text-secondary">
              Contacto: 
              <a 
                href="mailto:lili.zapata@duocuc.cl" 
                className="text-info text-decoration-none ms-1"
              >
                lili.zapata@duocuc.cl
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Exportamos el componente Footer para que pueda ser utilizado en otras partes de la aplicación, como en App.jsx.
export default Footer;