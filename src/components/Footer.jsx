import React from 'react';

const Footer = () => {
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

export default Footer;