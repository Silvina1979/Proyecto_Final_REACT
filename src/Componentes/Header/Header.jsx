import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Skill Track</h1>

      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Servicios</Link>
          </li>
          <li>
            <Link to="/destacados">Los más buscados</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotr@s</Link>
          </li>

          <li>
            <Link to="/carrito">🛒 Carrito</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
