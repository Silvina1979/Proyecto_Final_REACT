import styles from "./Item.module.css";
import { useState } from "react";

function Item({ nombre, precio, imagen, stock }) {
  const [cantidad, setCantidad] = useState(0);

  const [esFavorito, setEsFavorito] = useState(false);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const agregarAlCarrito = () => {
    alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`);
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  return (
    <div className={styles.card}>
      <img src={imagen} className={styles.imagen} alt="" />
      <div className={styles.cardTitle}>
        <h3>{nombre}</h3>
        <span className={styles.favorito} onClick={marcarComoFavorito}>
          {esFavorito ? "⭐" : "☆"}
        </span>
      </div>
      <p>Precio: ${precio}</p>
      <p>Stock: {stock}</p>
      <div className={styles.contador}>
        <button onClick={decrementar}>-</button>
        <p>{cantidad}</p>
        <button onClick={incrementar}> + </button>
      </div>
      <button onClick={agregarAlCarrito}>Agregar al Carrito</button>
    </div>
  );
}

export default Item;
