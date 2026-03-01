import React from 'react';
import ItemListContainer from './ItemListContainer';

// Componente para mostrar las novedades, reutilizando el ItemListContainer con el tipo "novedades"
const Novedades = ({ carrito, agregarAlCarrito }) => {
    return (
        <div className="novedades-section">
            <ItemListContainer 
                tipo="novedades" 
                carrito={carrito} 
                agregarAlCarrito={agregarAlCarrito} 
            />
        </div>
    );
};

export default Novedades;