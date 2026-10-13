import { useState, useEffect } from "react";
import styles from "./Equipo.module.css";
import { TarjetaContacto } from "./TarjetaContacto/TarjetaContacto.jsx";

export function EquipoContainer() {
  const [equipoData, setEquipoData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información del equipo");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setEquipoData(datos);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return (
      <p style={{ textAlign: "center", padding: "20px" }}>
        Cargando equipo... ⏳
      </p>
    );
  }

  if (error) {
    return (
      <p style={{ textAlign: "center", color: "red", padding: "20px" }}>
        Error: {error} ❌
      </p>
    );
  }
  return (
    <div className={styles.equipoColumn}>
      <h4 className={styles.columnTitle}>Nuestro Equipo</h4>
      <div className={styles.equipoList}>
        {equipoData.map((miembro) => (
          <TarjetaContacto
            key={miembro.id}
            nombre={miembro.nombre}
            email={miembro.email}
            puesto={miembro.puesto}
            foto={miembro.foto}
          />
        ))}
      </div>
    </div>
  );
}
export default EquipoContainer;
