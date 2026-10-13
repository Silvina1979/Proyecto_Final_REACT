import styles from "./Footer.module.css";
import { EquipoContainer } from "../Equipo/EquipoContainer.jsx"; // 👈 Importamos el equipo

function Footer() {
  return (
    <footer className={styles.footer}>
      <EquipoContainer />

      <p className={styles.copy}>
        &copy; 2026 Mi App React. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
