import styles from "./ItemList.module.css";
import Item from "../Item/Item";

function ItemList({ productos, mensaje }) {
  return (
    <>
      <h1>{mensaje}</h1>
      <div className={styles.container}>
        {productos.map((producto) => (
          <Item key={producto.id} {...producto} />
        ))}
      </div>
    </>
  );
}

export default ItemList;
