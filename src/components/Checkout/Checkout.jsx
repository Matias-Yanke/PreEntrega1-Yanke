import React from "react";
import { useState, useContext } from "react";
import Formulario from "./Formulario";
import { CartContext } from "../../contex/CartContext";
import db from "../../db/db.js";
import { collection, addDoc } from "firebase/firestore";
import validateForm from "../../utils/validacionFormulario.js";
import { toast } from "react-toastify";

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [idOrden, setIdOrden] = useState(null);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = async (event) => {
    event.preventDefault();
    const datos = {
      comprador: { ...datosForm },
      productos: [...carrito],
      total: precioTotal(),
    };
    const response = await validateForm(datosForm);
    if (response.status === "success") {
      subirOrden(datos);
    } else {
      toast.warn(response.message);
    }
    subirOrden(datos);
  };

  const subirOrden = (datos) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, datos)
      .then((respuesta) => {
        setIdOrden(respuesta.id);
      })
      .finally(() => {
        vaciarCarrito();
      });
  };
  return (
    <div>
      {idOrden ? (
        <div>
          <h2>Orden generada</h2>
          <p>su id es : {idOrden} </p>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};

export default Checkout;
