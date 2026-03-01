import React from 'react';
import Item from './Item';

// El componente ItemListContainer es un "contenedor inteligente" que recibe los datos ya procesados por App.js, lo que simplifica su lógica interna y mejora la separación de responsabilidades.
const ItemListContainer = ({ 
    tipo = 'ventas', 
    productos = [], // 💉 ¡NUEVO! Recibe los datos procesados por App.js
    carrito, 
    agregarAlCarrito, 
    eliminarDelCarrito, 
    vaciarCarrito, 
    totalCompra, 
    realizarCompra 
}) => {

    return (
        /* 1. Contenedor principal centrado con padding vertical (py-5) */
        <div className="container py-5"> 
            
            {/* 2. ENCABEZADO DE SECCIÓN: Título y controles del carrito */}
            <div className="d-flex justify-content-between align-items-center border-bottom border-info mb-5 pb-3">
                <h2 className="text-info text-uppercase mb-0">
                    Sección: {tipo}
                </h2>
                
                {/* Renderizado Condicional: Botones de compra rápida (Solo en tienda y si hay items) */}
                {tipo === 'ventas' && carrito.length > 0 && (
                    <div className="d-flex align-items-center gap-3 animate__animated animate__fadeInRight">
                        <div className="text-end me-2">
                            <span className="text-secondary small d-block">Total acumulado:</span>
                            <span className="text-success fw-bold fs-4">${totalCompra.toLocaleString()}</span>
                        </div>

                        <div className="btn-group">
                            <button className="btn btn-success fw-bold" onClick={realizarCompra}>
                                <i className="bi bi-cash-stack"></i> Comprar
                            </button>
                            <button className="btn btn-outline-danger fw-bold" onClick={vaciarCarrito}>
                                <i className="bi bi-trash"></i> Vaciar
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* 3. CUERPO PRINCIPAL: Renderizado condicional basado en los datos de App.js */}
            {productos.length === 0 ? (
                /* Si el arreglo viene vacío, asumimos que App.js está en el segundo de "espera" simulando la red */
                <div className="text-center text-info my-5 py-5">
                    <div className="spinner-border" role="status" style={{ width: '3rem', height: '3rem' }}></div>
                    <p className="mt-3 fs-5 fw-bold">Cargando tesoros de la base de datos...</p>
                </div>
            ) : (
                /* Si ya llegaron los datos, dibujamos la grilla de tarjetas */
                <div className="row g-4"> 
                    {productos.map(prod => (
                        <Item 
                            key={prod.id} 
                            producto={prod} 
                            tipo={tipo} 
                            carrito={carrito}
                            agregarAlCarrito={agregarAlCarrito}
                            eliminarDelCarrito={eliminarDelCarrito}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;