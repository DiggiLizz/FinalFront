import React, { useState, useEffect } from 'react';
import Item from './Item';

// CIRUGÍA: Agregamos 'carrito' y 'agregarAlCarrito' a las props que recibe el contenedor
const ItemListContainer = ({ tipo = 'ventas', carrito, agregarAlCarrito }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        setCargando(true); // Reiniciamos el estado de carga al cambiar de tipo
        const archivo = `/assets/data/${tipo}.json`; 

        fetch(archivo)
            .then(res => res.json())
            .then(data => {
                setProductos(data);
                setCargando(false);
            })
            .catch(err => {
                console.error("Error en el trasplante de datos:", err);
                setCargando(false);
            });
    }, [tipo]);

    return (
        <div className="container mt-4">
            <h2 className="text-info text-uppercase border-bottom border-info mb-4">
                Sección: {tipo}
            </h2>

            {/* Renderizado condicional para el estado de carga */}
            {cargando ? (
                <div className="text-center text-info my-5">
                    <div className="spinner-border" role="status"></div>
                    <p className="mt-2">Cargando contenido...</p>
                </div>
            ) : (
                <div className="row">
                    {productos.map(prod => (
                        <Item 
                            key={prod.id} 
                            producto={prod} 
                            tipo={tipo} 
                            // PASO FINAL: Le entregamos las herramientas a cada Item
                            carrito={carrito}
                            agregarAlCarrito={agregarAlCarrito}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ItemListContainer;