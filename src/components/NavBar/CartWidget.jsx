import React, { useContext } from 'react';
import { CartContext } from "../../contex/CartContext";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  let cantidad = cantidadTotal()
  
  return (
    <Link to= "/carrito" className= "cartwidget">
        <PiShoppingCartSimpleThin size={30} className={ cantidad > 0 ? "carritoVerde" : "carritoRojo" } />
     
        <p>{ cantidad > 0 && cantidad }</p>
     </Link> 
  );
};

export default CartWidget;