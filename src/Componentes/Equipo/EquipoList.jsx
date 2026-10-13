import { useState, useEffect } from "react";
import { TarjetaContacto } from "../TarjetaContacto/TarjetaContacto";

export function Directorio() {
  const [nosotros, setNosotros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/nosotros.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hubo un problema al obtener los datos del equipo.");
        }
        return response.json();
      })
      .then((data) => {
        setNosotros(data);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  // Renderizado condicional para el estado de carga
  if (cargando) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          fontSize: "16px",
          color: "#4F46E5",
        }}
      >
        Cargando equipo... ⏳
      </div>
    );
  }

  // Renderizado condicional para el error
  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "40px",
          color: "red",
          fontSize: "16px",
        }}
      >
        Error: {error} ❌
      </div>
    );
  }

  // Renderizado de la grilla de contactos una vez obtenidos los datos
  return (
    <section
      style={{ padding: "40px 20px", background: "#f9fafb", margin: "20px 0" }}
    >
      <h2
        style={{ textAlign: "center", marginBottom: "24px", color: "#1f2937" }}
      >
        Conoce a nuestro equipo
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {nosotros.map((persona) => (
          <TarjetaContacto key={persona.id} {...persona} />
        ))}
      </div>
    </section>
  );
}
