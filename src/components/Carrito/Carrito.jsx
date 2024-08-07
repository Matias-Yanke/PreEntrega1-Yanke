import React from "react";
import { CartContext } from "../../contex/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } =
    useContext(CartContext);

  if (carrito.length === 0) {
    return (
      <div className="carrito-vacio">
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Ver productos</Link>
      </div>
    );
  }

  return (
    <div className="carrito">
      {carrito.map((productoCarrito) => (
        <div className="carrito-item" key={productoCarrito.id}>
          <img src={productoCarrito.imagen} width={100} alt={productoCarrito.nombre} />
          <p>{productoCarrito.nombre}</p>
          <p>precio c/u ${productoCarrito.precio}</p>
          <p>cantidad: {productoCarrito.cantidad}</p>
          <p>total parcial: {productoCarrito.precio * productoCarrito.cantidad}</p>
          <button onClick={() => borrarProductoPorId(productoCarrito.id)}>Eliminar</button>
        </div>
      ))}
      <p className="carrito-precio-total">Precio total: ${precioTotal()}</p>
      <button className="carrito-vaciar" onClick={vaciarCarrito}>Vaciar carrito</button>
      <Link className="carrito-checkout" to="/checkout">Continuar con la compra</Link>
    </div>
  );
};

export default Carrito;
