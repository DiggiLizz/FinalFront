import React, { useEffect } from 'react';

// Componente Hero que muestra un carrusel de imágenes con información destacada
const Hero = () => {
    // useEffect para inicializar el carrusel de Bootstrap una vez que el componente se monta
    useEffect(() => {
        const carouselElement = document.querySelector('#heroCarousel');
        if (window.bootstrap && carouselElement) {
            new window.bootstrap.Carousel(carouselElement, {
                interval: 3000,
                ride: 'carousel'
            });
        }
    }, []);

    // Renderizamos el carrusel con tres imágenes, cada una con su título y descripción. También incluimos los indicadores y los botones de control para navegar entre las imágenes.
    return (
        <header id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            {/* Indicadores (las rayitas de abajo) */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner">
                {/* PRIMERA FOTO: Inicio */}
                <div className="carousel-item active" data-bs-interval="3000">
                    <img src="./assets/imagenes/lizz.png" className="d-block w-100" alt="Sekhmet Inicio" />
                    <div className="carousel-caption">
                        <h2 className="fw-bold text-shadow">Bienvenidos a Sekhmet</h2>
                        <p className="d-none d-md-block">Tu portal favorito de gaming y cultura anime.</p>
                    </div>
                </div>
                
                {/* SEGUNDA FOTO: Anime */}
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="./assets/imagenes/PortadaAnime.jpg" className="d-block w-100" alt="Anime Destacado" />
                    <div className="carousel-caption">
                        <h2 className="fw-bold text-shadow">Cultura Anime</h2>
                        <p className="d-none d-md-block">Reseñas profundas de tus clásicos favoritos.</p>
                    </div>
                </div>

                {/* TERCERA FOTO: Videojuegos */}
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="./assets/imagenes/PortadaVideoJuegos.png" className="d-block w-100" alt="Videojuegos" />
                    <div className="carousel-caption">
                        <h2 className="fw-bold text-shadow">Próximos Lanzamientos</h2>
                        <p className="d-none d-md-block">Análisis técnicos y opiniones honestas.</p>
                    </div>
                </div>
            </div>

            {/* Botones de Control (Flechas) */}
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </header>
    );
};

// Exportamos el componente Hero para que pueda ser utilizado en otras partes de la aplicación
export default Hero;