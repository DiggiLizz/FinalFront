import React, { useState } from 'react';
import './styles/estilos.css'; 

// Importación de componentes
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Hero from './components/Hero';
import HomeSections from './components/HomeSections';
import CommunityForm from './components/CommunityForm';
import Footer from './components/Footer';

function App() {
  const [seccionActual, setSeccionActual] = useState('inicio');
  
  // estado del carrito
  const [carrito, setCarrito] = useState([]);

  // Función para agregar 
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <div className="App" style={{ backgroundColor: '#0B1220', minHeight: '100vh' }}>
      {/* Pasamos la longitud del carrito al Navbar para el contador */}
      <Navbar setSeccion={setSeccionActual} cantidadCarrito={carrito.length} />
      
      <main>
      {seccionActual === 'inicio' ? (
        <>
          <Hero />
          <HomeSections setSeccion={setSeccionActual} />
          <CommunityForm />
        </>
      ) : (
        <>
          {/* ALERTA DE CARRITO VACÍO: Renderizado condicional */}
          {seccionActual === 'ventas' && carrito.length === 0 && (
            <div className="container mt-4">
              <div className="alert alert-dark text-info border-info text-center shadow-sm animate__animated animate__fadeIn">
                <i className="bi bi-cart"></i> Tu carrito está vacío. ¡Elige tus figuras favoritas!
              </div>
            </div>
          )}

          <ItemListContainer 
            tipo={seccionActual} 
            agregarAlCarrito={agregarAlCarrito} 
            carrito={carrito}
          />
        </>
      )}
    </main>
      
      <Footer />
    </div>
  );
}

export default App;