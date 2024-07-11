import { useState, useEffect } from "react";
import { obtenerProductos} from "../../data/data.js";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const {idProduct} = useParams()

    useEffect(() => {
        obtenerProductos()
            .then((data) => {
                const productoFiltrado = data.find((productoData) => productoData.id === idProduct);
                setProducto(productoFiltrado)
                    })
    }, [])

  return (
    <div>
        <h2>{producto.nombre}</h2>
        <img src={producto.imagen} alt="" />

    </div>
  )
}

export default ItemDetailContainer