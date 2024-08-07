import React from "react";

const Formulario = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
    <div>
      <form onSubmit={enviarOrden}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={datosForm.nombre}
          onChange={guardarDatosInput}
        />
        <label>Telefono</label>
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
        <button type="submit">Enviar oden</button>
      </form>
    </div>
  );
};

export default Formulario;
