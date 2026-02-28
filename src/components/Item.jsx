import React from 'react';

const Item = ({ producto, tipo, carrito, agregarAlCarrito }) => {
    // Lógica para el botón de carrito (se calcula antes del render)
    const estaEnCarrito = carrito?.some(item => item.id === producto.id);

    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="card bg-dark text-white border-secondary h-100 shadow card-neon">
                <img 
                    src={producto.imagen} 
                    className="card-img-top" 
                    alt={producto.titulo} 
                    style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                    {/* TÍTULO ARRIBA */}
                    <h5 className="card-title text-info">{producto.titulo}</h5>
                    
                    {/* 1. SECCIÓN DE RESEÑAS (Prioridad: Anime y Videojuegos) */}
                    {(tipo === 'anime' || tipo === 'videojuegos') && (
                        <>
                            <p className="card-text small text-secondary mb-2">
                                {producto.descripcion.substring(0, 120)}...
                            </p>
                            
                            {/* Tu Opinión Personal destacada */}
                            <div className="p-2 mb-3 rounded" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', borderLeft: '3px solid #ffc107' }}>
                                <p className="card-text small font-italic text-light">
                                    <strong>Mi opinión:</strong> "{producto.opinionPersonal}"
                                </p>
                            </div>

                            <div className="mt-auto">
                                <a href={producto.link} target="_blank" rel="noreferrer" className="btn btn-outline-warning w-100">
                                    Ver Reseña Completa
                                </a>
                            </div>
                        </>
                    )}

                    {/* 2. SECCIÓN DE VENTAS (Tienda) */}
                    {tipo === 'ventas' && (
                        <>
                            <p className="card-text text-secondary small">
                                Figura coleccionable de alta calidad.
                            </p>
                            <p className="card-text text-success fw-bold fs-4">
                                ${producto.precio.toLocaleString()}
                            </p>
                            <div className="mt-auto">
                                <button 
                                    onClick={() => agregarAlCarrito(producto)}
                                    className={estaEnCarrito ? "btn btn-success w-100" : "btn btn-outline-info w-100"}
                                    disabled={estaEnCarrito}
                                >
                                    {estaEnCarrito ? "✓ En el carrito" : "Agregar al Carrito"}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Item;