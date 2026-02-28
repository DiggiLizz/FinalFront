import React, { useState } from 'react';

const CommunityForm = () => {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    // Aquí podrías limpiar el formulario si quisieras
  };

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
                  <input type="text" className="form-control bg-dark text-white border-secondary" required placeholder="Tu nombre" />
                </div>
                <div className="mb-3 text-start">
                  <label className="form-label">Correo Electrónico</label>
                  <input type="email" className="form-control bg-dark text-white border-secondary" required placeholder="tu@email.com" />
                </div>
                <button type="submit" className="btn btn-primary w-100 shadow-sm">Enviar Solicitud</button>
              </form>
            ) : (
              <div className="alert alert-success mt-3 animate__animated animate__fadeIn">
                ¡Gracias! Tu solicitud ha sido enviada con éxito.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForm;