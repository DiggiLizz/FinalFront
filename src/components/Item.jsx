import React, { useState } from 'react';

// Componente que representa un producto individual, mostrando su imagen, título, precio (si es de ventas) y una descripción breve. Al hacer clic en la tarjeta, se abre un modal con información detallada y opciones para agregar al carrito o ver más detalles.
const Item = ({ producto, tipo, carrito, agregarAlCarrito }) => {
    const [estaAbierto, setEstaAbierto] = useState(false);
    
    // Verificar si el producto ya está en el carrito para deshabilitar el botón de agregar
    const estaEnCarrito = carrito?.some(item => item.id === producto.id);

    // Determinar la clase del contenedor según el tipo de producto (novedades ocupa toda la fila, ventas ocupa un tercio)
    const claseContenedor = tipo === 'novedades' ? "col-12" : "col-md-6 col-lg-4";
    
    // Variable para activar o desactivar el efecto neón en la tarjeta (puede ser controlada por una prop o estado global)
    const neonActivo = false; 

    // Estilos dinámicos para la tarjeta y el título, aplicando efectos neón si está activo
    const estiloCard = {
        backgroundColor: 'rgba(17, 24, 39, 0.95)',
        borderRadius: '15px',
        transition: 'all 0.5s ease',
        border: neonActivo ? '2px solid #FF00FF' : '1px solid #2B3753',
        boxShadow: neonActivo ? '0 0 15px #FF00FF' : 'none',
        overflow: 'hidden'
    };

    // Estilos para el título, cambiando el color y agregando un resplandor si el modo neón está activo
    const estiloTitulo = {
        color: neonActivo ? '#FF00FF' : '#0dcaf0',
        textShadow: neonActivo ? '0 0 10px #FF00FF' : 'none',
    };

    // Renderizamos la tarjeta del producto con su imagen, título, precio (si es de ventas) y un botón para ver más detalles o agregar al carrito. Al hacer clic en la tarjeta, se abre un modal con información detallada del producto.
    return (
        <div className={`${claseContenedor} mb-4 d-flex justify-content-center`}>
            
            {/* VISTA 1: TARJETA PRINCIPAL */}
            <div 
                className="card card-neon h-100 shadow border-0 w-100 d-flex flex-column" 
                onClick={() => setEstaAbierto(true)}
                style={{ 
                    cursor: 'pointer', 
                    overflow: 'hidden',
                    maxWidth: tipo === 'novedades' ? 'min(100%, 800px)' : '100%'
                }}
            >
                <img 
                    src={producto.imagen} 
                    className="card-img-top p-2" 
                    alt={producto.titulo} 
                    style={{ height: '220px', objectFit: 'cover', cursor: 'zoom-in', borderRadius: '15px' }}
                />
                
                <div className="card-body d-flex flex-column justify-content-between text-center flex-grow-1">
                    <div>
                        <h5 className="card-title fw-bold mb-3" style={estiloTitulo}>
                            {producto.titulo}
                        </h5>
                        
                        {tipo === 'ventas' && (
                            <>
                                {/* LÓGICA DE PRECIOS EN VITRINA */}
                                {producto.precioAnterior ? (
                                    <div className="mb-3 w-100">
                                        <span className="badge bg-danger shadow-sm mb-1">¡OFERTA ESPECIAL!</span>
                                        <p className="text-secondary text-decoration-line-through small mb-0">
                                            Antes: ${producto.precioAnterior.toLocaleString()}
                                        </p>
                                        <p className="text-success fw-bold fs-4 mb-0">
                                            Ahora: ${producto.precio.toLocaleString()}
                                        </p>
                                    </div>
                                ) : (
                                    // Si no hay descuento, solo muestra el precio normal en blanco
                                    <div className="mb-3 w-100 d-flex align-items-center justify-content-center" style={{ minHeight: '60px' }}>
                                        <p className="fw-bold fs-4 text-white mb-0">
                                            ${producto.precio.toLocaleString()}
                                        </p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* BOTONES DE ACCIÓN EN VITRINA */}
                    {tipo === 'ventas' ? (
                        <button 
                            className={`btn ${neonActivo ? 'btn-outline-magenta' : 'btn-info'} w-100 rounded-pill fw-bold mt-auto shadow-sm`} 
                            onClick={(e) => {
                                e.stopPropagation(); 
                                agregarAlCarrito(producto);
                            }}
                            style={neonActivo ? { borderColor: '#FF00FF', color: '#FF00FF' } : { color: '#000' }}
                        >
                            {neonActivo ? 'ADQUIRIR TESORO' : 'Agregar al carrito'} <i className="bi bi-cart-plus ms-1"></i>
                        </button>
                    ) : (
                        <button 
                            className="btn btn-outline-info w-100 fw-bold mt-auto rounded-pill py-2"
                            onClick={() => setEstaAbierto(true)}
                        >
                            Ver Reseña Completa <i className="bi bi-eye ms-1"></i>
                        </button>
                    )}
                </div>
            </div>

            {/* VISTA 2: OVERLAY DETALLADO */}
            {estaAbierto && (
                <div 
                    className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
                    style={{ backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1050 }}
                    onClick={() => setEstaAbierto(false)}
                >
                    <div 
                        className="card bg-dark text-white border-info shadow-lg animate__animated animate__fadeInUp"
                        style={{ maxWidth: '850px', width: '90%', borderRadius: '20px', overflow: 'hidden' }}
                        onClick={(e) => e.stopPropagation()} 
                    >
                        
                        <button onClick={() => setEstaAbierto(false)} style={estilosModal.botonCerrar}>✕</button>
                        
                        <div className="row g-0 align-items-center">
                            
                            <div className="col-md-6 bg-black d-flex align-items-center justify-content-center">
                                <img src={producto.imagen} alt={producto.titulo} style={estilosModal.imagenGrande} />
                            </div>
                            
                            <div className="col-md-6 p-4 text-center text-white d-flex flex-column" style={{ minHeight: '400px' }}>
                                <h2 style={estiloTitulo} className="mb-4">{producto.titulo}</h2>
                                
                                {tipo === 'ventas' && (
                                    <div className="my-3 p-3 rounded" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                                        {/* Condicional estricto en el Modal */}
                                        {producto.precioAnterior ? (
                                            <>
                                                <p style={{ color: '#adb5bd', textDecoration: 'line-through' }} className="mb-1 fs-5">
                                                    Antes: ${producto.precioAnterior.toLocaleString()}
                                                </p>
                                                <p className="text-success fw-bold fs-2 mb-0">
                                                    Ahora: ${producto.precio.toLocaleString()}
                                                </p>
                                                <p className="text-warning small fw-bold mt-2 mb-0">
                                                    ⚠️ ¡Válido hasta agotar stock!
                                                </p>
                                            </>
                                        ) : (
                                            // Si no hay descuento, solo muestra el precio base
                                            <p className="text-white fw-bold fs-2 mb-0">
                                                ${producto.precio.toLocaleString()}
                                            </p>
                                        )}
                                    </div>
                                )}

                                <p style={{ color: '#B6C0DD', textAlign: 'justify', textJustify: 'inter-word' }} className="my-4 flex-grow-1">
                                    {producto.descripcion || producto.altText}
                                </p>

                                {tipo !== 'ventas' && producto.opinionPersonal && (
                                    <div className="text-start mt-3">
                                        <h6 className="text-info text-uppercase small fw-bold">Mi Opinión:</h6>
                                        <div className="p-3 rounded bg-black bg-opacity-25 border-start border-info mb-4">
                                            <p className="small fst-italic mb-0 text-secondary" style={{ textAlign: 'justify' }}>
                                                "{producto.opinionPersonal}"
                                            </p>
                                        </div>
                                        <a href={producto.link || "#"} target="_blank" rel="noreferrer" className="btn btn-outline-info w-100 rounded-pill mt-auto">
                                            Ver más <i className="bi bi-box-arrow-up-right ms-2"></i>
                                        </a>
                                    </div>
                                )}
                                
                                {tipo === 'ventas' && (
                                    <button 
                                        className="btn btn-info mt-auto px-5 fw-bold rounded-pill py-3 shadow-sm fs-5" 
                                        onClick={() => { agregarAlCarrito(producto); setEstaAbierto(false); }}
                                    >
                                        Agregar al Carrito <i className="bi bi-cart-plus ms-2"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// Estilos específicos para el modal, incluyendo el botón de cerrar y la imagen grande. El botón de cerrar es un ícono grande en la esquina superior derecha, y la imagen se ajusta para ocupar todo el espacio disponible sin distorsionarse.
const estilosModal = {
    botonCerrar: {
        position: 'absolute', top: '15px', right: '20px',
        background: 'none', border: 'none', color: '#0dcaf0',
        fontSize: '2rem', cursor: 'pointer', zIndex: 10,
        textShadow: '0 0 10px rgba(0,0,0,0.5)'
    },
    imagenGrande: {
        width: '100%', height: '100%', minHeight: '480px', objectFit: 'cover'
    }
};

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación, como en el ItemListContainer donde se renderizan las listas de productos.
export default Item;