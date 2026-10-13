import styles from "./TarjetaContacto.module.css";

export function TarjetaContacto({ nombre, email, puesto, foto }) {
  return (
    <div className={styles.tarjeta}>
      <img src={foto} alt={nombre} className={styles.avatar} />
      <h3 className={styles.nombre}>{nombre}</h3>
      <p className={styles.puesto}>{puesto}</p>
      <p className={styles.email}>{email}</p>
    </div>
  );
}
