const productos = [
    {
      id: "ajm354",
      nombre: "Remera Oversize Negra",
      descripcion: "Algodon Peinado 24/1. Tapa Costura de Hombro a Hombro.",
      stock: 5,
      categoria: "remeras",
      imagen: "https://acdn.mitiendanube.com/stores/002/215/740/products/remeras-historias-583641199c789b021617029920569428-1024-1024.webp",
      precio: 15000,
    },
    {
      id: "abc124",
      nombre: "Buzo Oversize Chocolate",
      descripcion: "Frisa Invisible de Excelente Calidad! Con Tapa Costura en Cuello y terminaciones Premium.",
      stock: 5,
      categoria: "buzos",
      imagen: "https://acdn.mitiendanube.com/stores/002/215/740/products/buzos_mesa-de-trabajo-1-copia-fe42042a812c55585617151259108767-1024-1024.webp",
      precio: 25000,
    },
    {
      id: "auy785",
      nombre: "Piluso Beige",
      descripcion: "Piluso confeccionado con Gabardina rigida de 8oz.",
      stock: 5,
      categoria: "accesorios",
      imagen: "https://acdn.mitiendanube.com/stores/002/215/740/products/piluso-beige-715c555e9284371cfe17037688285770-1024-1024.webp",
      precio: 10000,
    }
  ];

    const obtenerProductos = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(productos);
        }, 3000);
      });
    };

    export { obtenerProductos }