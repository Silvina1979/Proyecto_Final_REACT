import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Componentes/Layout/Layout.jsx";
import ItemListContainer from "./Componentes/Item/ItemListContainer.jsx";
import FormularioContainer from "./Componentes/Formulario/FormularioContainer/FormularioContainer.jsx";
import EquipoContainer from "./Componentes/Equipo/EquipoContainer.jsx";

function App() {
  return (
    <Routes>
      {/* El Layout envuelve a todas las páginas principales */}
      <Route element={<Layout />}>
        {/* Página de Inicio */}
        <Route
          path="/"
          element={
            <div>
              <ItemListContainer Mensaje="Nuestros productos destacados" />
              <FormularioContainer />
            </div>
          }
        />

        {/* Catálogo de Productos */}
        <Route
          path="/productos"
          element={<ItemListContainer Mensaje="Catálogo de Productos" />}
        />

        <Route path="/nosotros" element={<EquipoContainer />} />

        {/* Ruta para capturar cualquier enlace no deseado o en construcción temporal */}
        <Route
          path="*"
          element={
            <div
              style={{ padding: "40px", textAlign: "center", color: "#fff" }}
            >
              <h2>Sección temporalmente desactivada o en construcción</h2>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
