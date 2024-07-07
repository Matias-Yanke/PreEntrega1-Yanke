import { obtenerProductos } from "../../data/data.js"
import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ saludo }) => {

const [ productos, setProductos] = useState ([])

  useEffect(()=>{
    obtenerProductos()
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finalizó la promesa");
      }); 
  }, []);


  return (
    <div className="saludo-container">
      <p>{saludo}</p>
      <ItemList productos = {productos}/>
      
    </div>
  );
};

export default ItemListContainer;

