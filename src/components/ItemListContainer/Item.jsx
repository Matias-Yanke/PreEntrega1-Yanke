const Item = ({producto}) => {
  return (
    <div key={producto.id}>
    <img src={producto.imagen} width={200} alt="" />
    <p>{producto.nombre}</p>
    <p>${producto.precio}</p>
  </div>
  );
};

export default Item