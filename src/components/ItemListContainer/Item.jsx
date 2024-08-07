import { Link } from "react-router-dom";
import './Item.css';

const Item = ({ producto }) => {
  return (
    <div className="item">
      <img src={producto.imagen} alt={producto.nombre} className="item-image" />
      <p className="item-name">{producto.nombre}</p>
      <p className="item-price">Precio: ${producto.precio}</p>
      <Link to={"/detail/" + producto.id} className="item-link">VER DETALLE</Link>
    </div>
  );
};

export default Item;
