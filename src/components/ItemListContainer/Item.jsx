import { Link } from "react-router-dom";
const Item = ({producto}) => {
  return (
    <div>
    <img src={producto.imagen} width={200} alt="" />
    <p>{producto.nombre}</p>
    <p>precio: ${producto.precio} </p>
    <Link to={ "/detail/" + producto.id} >VER DETALLE</Link>
  </div>
  );
};

export default Item