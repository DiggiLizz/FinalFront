import React from 'react';

const Hero = () => {
  return (
    <header id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="3000">
          <img src="assets/imagenes/lizz.png" className="d-block w-100" alt="Sekhmet Inicio" />
          <div className="carousel-caption">
            <h2 className="fw-bold">Bienvenidos a Sekhmet</h2>
            <p className="d-none d-md-block">Tu portal favorito de gaming y cultura anime.</p>
          </div>
        </div>
        {/* Aquí puedes seguir pegando los otros carousel-item de tu código antiguo */}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </header>
  );
};

export default Hero;