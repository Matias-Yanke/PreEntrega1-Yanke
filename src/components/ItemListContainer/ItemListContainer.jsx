import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useLoading from "../../hooks/useLoading.jsx";
import Loading from "../Ejemplos/Loading.jsx";
import { useParams } from "react-router-dom";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const { isLoading, showLoading, hideLoading } = useLoading();

  const { idCategory } = useParams();

  const obtenerProductos = () => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef).then((respuesta) => {
      const data = respuesta.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    });
  };
  const obtenerProductosFiltrados = () => {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("categoria", "==", idCategory));
    getDocs(q).then((respuesta) => {
      const data = respuesta.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    });
  };

  useEffect(() => {
    if (idCategory) {
      obtenerProductosFiltrados();
    } else {
      obtenerProductos();
    }
  }, [idCategory]);

  return (
    <div className="saludo-container">
      <p>{saludo}</p>
      {isLoading ? <Loading /> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
