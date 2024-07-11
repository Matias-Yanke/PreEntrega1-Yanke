import { obtenerProductos } from "../../data/data.js"
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import useLoading from "../../hooks/useLoading.jsx";
import Loading from "../Ejemplos/Loading.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {

const [ productos, setProductos] = useState ([]);

const {isLoading, showLoading, hideLoading } = useLoading ()  

const { idCategory }= useParams()

  useEffect(()=>{
    showLoading()
    obtenerProductos()
      .then((respuesta) => {
        if (idCategory){ 
          const productosFiltrados = respuesta.filter((producto) => producto.categoria === idCategory);
        setProductos(productosFiltrados)
      }else{ 
        setProductos(respuesta);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        hideLoading();
      }); 
  }, [idCategory]);


  return (
    <div className="saludo-container">
      <p>{saludo}</p>
      {isLoading ? <Loading /> : <ItemList productos = {productos}/> }
      
    </div>
  );
};

export default ItemListContainer;

