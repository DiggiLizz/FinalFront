import React, { useState } from 'react';

// Este componente representa un formulario para unirse a la comunidad, con validación manual del correo y uso del estado para capturar el nombre del usuario.
const CommunityForm = () => {

  // Estado para controlar si el formulario ha sido enviado o no
  const [enviado, setEnviado] = useState(false);

  // PASO 1: Creamos un estado para almacenar el nombre del usuario
  const [nombre, setNombre] = useState('');

  // CIRUGÍA FINAL: Agregamos validación manual del correo y conectamos el input con el estado 'nombre'
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // PASO 2: Validación manual del formato de correo
    const email = e.target.email.value;
    if (!email.includes('@')) {
      alert("Por favor, ingresa un formato de correo válido.");
      return;
    }

    setEnviado(true);
  };

  // Renderizamos el formulario o el mensaje de éxito dependiendo del estado 'enviado'. El mensaje de éxito incluye el nombre capturado.
  return (
    <section className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card bg-dark border-info text-light p-4 shadow card-neon">
            <h3 className="text-info mb-4">¡Únete a la Comunidad!</h3>
            
            {!enviado ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-3 text-start">
                  <label className="form-label">Nombre o Nickname</label>
                  {/* PASO 3: Conectamos el input con el estado 'nombre' */}
                  <input 
                    type="text" 
                    className="form-control bg-dark text-white border-secondary" 
                    required 
                    placeholder="Tu nombre" 
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label">Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control bg-dark text-white border-secondary" 
                    required 
                    placeholder="tu@email.com" 
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 shadow-sm">Enviar Solicitud</button>
              </form>
            ) : (
              <div className="alert alert-success mt-3 animate__animated animate__fadeIn">
                {/* PASO 4: Usamos el nombre capturado en el mensaje */}
                ¡Gracias **{nombre}**! Tu solicitud ha sido enviada con éxito.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Exportamos el componente para que pueda ser utilizado en otras partes de la aplicación
export default CommunityForm;