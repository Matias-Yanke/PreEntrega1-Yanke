import { useState, useEffect } from "react";
import ItemDetail from "./itemDetail.jsx";
import { useParams } from "react-router-dom";
import db from "../../db/db.js";
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { idProduct } = useParams(); 

  const obtenerProducto = () => {
    const docRef = doc(db, "productos", idProduct);
    getDoc(docRef)
      .then((respuesta) => {
        const data = { id: respuesta.id, ...respuesta.data() };
        setProducto(data);
      })
     
  };

    useEffect(() => {
      obtenerProducto()
    }, [idProduct]);

  return (
    <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer