import React from "react";
import "./Formulario.css";

const Formulario = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
    <div className="form-container">
      <form onSubmit={enviarOrden}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={datosForm.nombre}
          onChange={guardarDatosInput}
        />
        <label>Teléfono</label>
        <input
          type="text"
          name="telefono"
          value={datosForm.telefono}
          onChange={guardarDatosInput}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={datosForm.email}
          onChange={guardarDatosInput}
        />
        <button type="submit">Enviar orden</button>
      </form>
    </div>
  );
};

export default Formulario;
