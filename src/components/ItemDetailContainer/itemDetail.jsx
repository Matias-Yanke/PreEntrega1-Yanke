import React from 'react';
import { CartContext } from '../../contex/CartContext';
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {
      ...producto,
      cantidad: contador,
    };
    agregarProducto(productoCarrito);
  };

  return (
    <div className="item-detail">
      <h2 className="item-detail-name">{producto.nombre}</h2>
      <img src={producto.imagen} className="item-detail-image" alt={producto.nombre} />
      <p className="item-detail-description">{producto.descripcion}</p>
      <p className="item-detail-price">${producto.precio}</p>
      <ItemCount agregarAlCarrito={agregarAlCarrito} stock={producto.stock} />
    </div>
  );
};

export default ItemDetail;
