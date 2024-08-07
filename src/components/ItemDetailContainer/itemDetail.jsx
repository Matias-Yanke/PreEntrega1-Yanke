import React from 'react';
import { CartContext } from '../../contex/CartContext';
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {

  const { agregarProducto} = useContext(CartContext)

  const agregarAlCarrito = (contador) =>{
    const productoCarrito = {
      ...producto,
      cantidad: contador
    }
    agregarProducto(productoCarrito)
  }


  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} width={400} alt={producto.nombre} />
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <ItemCount agregarAlCarrito= {agregarAlCarrito} stock={producto.stock} />
    </div>
  );
};

export default ItemDetail;