import React, { useState, useEffect } from 'react'; 
import './styles/estilos.css'; 

import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero';
import HomeSections from './components/HomeSections';
import CommunityForm from './components/CommunityForm';
import Footer from './components/Footer';

// Importamos la base de datos local
import datosVentas from './assets/data/ventas.json';
import datosAnime from './assets/data/anime.json';
import datosJuegos from './assets/data/videojuegos.json';
import datosNovedades from './assets/data/novedades.json';

// ¡Bienvenido a Sekhmet, la tienda de figuras de colección más épica del universo! 🚀✨
function App() {
  const [seccionActual, setSeccionActual] = useState('inicio');
  const [neonMode, setNeonMode] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [mostrarAviso, setMostrarAviso] = useState(false);
  const [listaNovedades, setListaNovedades] = useState([]);

  // 1. Inician vacíos (simulando que aún no llegan de internet)
  const [productosVenta, setProductosVenta] = useState([]);
  const [listaAnime, setListaAnime] = useState([]);
  const [listaJuegos, setListaJuegos] = useState([]);

  // 2. Simulamos la carga de datos con un retraso (Criterio 2)
  useEffect(() => {
    const cargarDatos = setTimeout(() => {
      setProductosVenta(datosVentas); 
      setListaAnime(datosAnime);
      setListaJuegos(datosJuegos);
      setListaNovedades(datosNovedades);
    }, 1000);

    return () => clearTimeout(cargarDatos);
  }, []);

  // 3. Efecto para manejar el modo neón con la tecla "V"
  useEffect(() => {
    const manejarTeclado = (e) => {
      if (e.key.toLowerCase() === 'v') {
        setNeonMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', manejarTeclado);
    return () => window.removeEventListener('keydown', manejarTeclado);
  }, []);

  // 4. Efecto para mostrar el aviso flotante
  useEffect(() => {
    if (neonMode) {
      setMostrarAviso(true);
      const timer = setTimeout(() => {
        setMostrarAviso(false);
      }, 5000);
      return () => clearTimeout(timer); 
    }
  }, [neonMode]);

  // 5. Función para manejar los clicks en el logo
  const manejarLogoClick = () => {
    setClickCount(prev => {
      const nuevoConteo = prev + 1;
      if (nuevoConteo === 3) {
        setNeonMode(!neonMode);
        return 0;
      }
      return nuevoConteo;
    });
    setTimeout(() => setClickCount(0), 500);
  };

  // 6. Funciones para manejar el carrito de compras
  const agregarAlCarrito = (producto) => {
    const nuevoItem = { ...producto, instanceId: Date.now() + Math.random() };
    setCarrito([...carrito, nuevoItem]);
    alert(`¡Genial! Se ha agregado la figura "${producto.titulo}" al carrito.`);
  };

  // Eliminar un producto específico del carrito usando su instanceId único
  const eliminarDelCarrito = (instanceId) => {
    setCarrito(carrito.filter(item => item.instanceId !== instanceId));
  };

  // Vaciar todo el carrito
  const vaciarCarrito = () => setCarrito([]);

  // Calcular el total de la compra sumando los precios de los productos en el carrito
  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.precio, 0);
  };

  // Función para simular la compra, mostrando un mensaje de agradecimiento con el total y la cantidad de artículos adquiridos
  const realizarCompra = () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
        return;
    }
    const total = calcularTotal();
    alert(`¡Gracias por tu compra! Has adquirido ${carrito.length} artículos por un total de $${total.toLocaleString()}. El comprobante llegará a tu correo.`);
    setCarrito([]);
  };

  // Renderizamos la aplicación con la estructura principal, incluyendo el Navbar, el contenido dinámico según la sección seleccionada, y el Footer. También aplicamos la clase 'neon-on' al contenedor principal si el modo neón está activado.
  return (
    <div className={`App ${neonMode ? 'neon-on' : ''}`}> 
      
      {mostrarAviso && (
        <div className="aviso-neon-flotante animate__animated animate__zoomIn"> 
          <div className="aviso-contenido">
            <i className="bi bi-lightning-charge-fill fs-1"></i>
            <h4 className="mt-2 fw-bold">¡MODO NEÓN ACTIVADO!</h4>
            <p className="mb-0">👻 Has descubierto el secreto de Sekhmet 👻</p>
          </div>
        </div>
      )}
      
      <Navbar 
        setSeccion={setSeccionActual} 
        cantidadCarrito={carrito.length} 
        seccionActual={seccionActual} 
        onLogoClick={manejarLogoClick}
      />
      
      <main>
        {seccionActual === 'inicio' ? (
          <>
            <Hero />
            <HomeSections setSeccion={setSeccionActual} />
            <div className="container mt-5 py-5 border-top border-secondary">
              <h3 className="text-info text-center text-uppercase fw-bold mb-5">
                📢 ¡ÚLTIMAS NOVEDADES DE LA COMUNIDAD! 😍
              </h3>
              <div className="d-flex justify-content-center align-items-center w-100">
                <div style={{ width: '100%', maxWidth: '800px' }}> 
                    <ItemListContainer 
                      tipo="novedades" 
                      productos={listaNovedades} 
                      carrito={carrito} 
                      agregarAlCarrito={agregarAlCarrito} 
                    />
                </div>
              </div>
            </div>
            <CommunityForm />
          </>
        ) : (
          <>
            {seccionActual === 'ventas' ? (
              <div className="container-fluid px-4 mt-4 animate__animated animate__fadeIn">
                <div className="row">
                  
                  <div className="col-12 col-lg-8 order-1">
                    <ItemListContainer 
                      tipo="ventas" 
                      productos={productosVenta}
                      agregarAlCarrito={agregarAlCarrito}
                      eliminarDelCarrito={eliminarDelCarrito} 
                      vaciarCarrito={vaciarCarrito}           
                      realizarCompra={realizarCompra}           
                      totalCompra={calcularTotal()} 
                      carrito={carrito}
                    />
                  </div>
                  
                  {/* Resumen de compra lateral */}
                  <div className="col-12 col-lg-4 order-2 mt-4 mt-lg-0">
                    <div className="card bg-dark border-info sticky-lg-top shadow-lg" style={{ top: '100px', zIndex: 10, borderRadius: '15px' }}>
                      <div className="card-header bg-info text-dark fw-bold text-center">
                        <i className="bi bi-bag-check-fill me-2"></i> RESUMEN DE COMPRA
                      </div>
                      
                      <div className="card-body p-0" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                        {carrito.length === 0 ? (
                          <div className="text-center py-5">
                            <p style={{ fontSize: '3rem', marginBottom: '10px' }}>🛒</p>
                            <p className="text-white fw-bold">No hay productos seleccionados</p>
                            <p className="text-secondary small">Tu colección espera por nuevos tesoros.</p>
                          </div>
                        ) : (
                          carrito.map((item) => (
                            <div key={item.instanceId} className="d-flex align-items-center justify-content-between p-3 border-bottom border-secondary animate__animated animate__fadeInRight">
                              <div className="d-flex align-items-center flex-grow-1 overflow-hidden">
                                <img src={item.imagen} alt={item.titulo} style={{ width: '45px', height: '45px', objectFit: 'cover', borderRadius: '5px' }} />
                                <div className="ms-3 text-start overflow-hidden">
                                  <p className="small mb-0 fw-bold text-info text-truncate" style={{ maxWidth: '180px' }}>{item.titulo}</p>
                                  <p className="small mb-0 text-white-50">${item.precio.toLocaleString()}</p>
                                  {item.precioAnterior && (
                                    <span className="small text-danger text-decoration-line-through" style={{ fontSize: '0.75rem' }}>
                                      Antes: ${item.precioAnterior.toLocaleString()}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <button 
                                className="btn btn-sm text-danger ms-2" 
                                onClick={() => eliminarDelCarrito(item.instanceId)}
                                style={{ fontSize: '1.2rem', fontWeight: 'bold' }}
                                title="Eliminar"
                              >
                                ✕
                              </button>
                            </div>
                          ))
                        )}
                      </div>

                      {carrito.length > 0 && (
                        <div className="card-footer bg-transparent border-info p-3">
                          <div className="d-flex justify-content-between fw-bold mb-3 fs-5">
                            <span>TOTAL:</span>
                            <span className="text-info">${calcularTotal().toLocaleString()}</span>
                          </div>
                          <button className="btn btn-info w-100 rounded-pill fw-bold py-2 shadow-sm" onClick={realizarCompra}>
                            FINALIZAR COMPRA <i className="bi bi-credit-card-2-back ms-2"></i>
                          </button>
                          <button 
                            className="btn btn-link btn-sm text-secondary text-decoration-none fw-bold w-100 mt-2" 
                            onClick={vaciarCarrito}
                          >
                            <i className="bi bi-trash-fill me-1"></i> VACIAR TODO EL CARRITO
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <ItemListContainer 
                tipo={seccionActual} 
                productos={seccionActual === 'anime' ? listaAnime : listaJuegos} 
                agregarAlCarrito={agregarAlCarrito}
                eliminarDelCarrito={eliminarDelCarrito} 
                vaciarCarrito={vaciarCarrito}           
                realizarCompra={realizarCompra}           
                totalCompra={calcularTotal()} 
                carrito={carrito}
              />
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;