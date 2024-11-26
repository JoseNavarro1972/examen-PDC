import React from "react";

const Ejercicio3 = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Formulario - Ejercicio 3</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Ejercicio3;
