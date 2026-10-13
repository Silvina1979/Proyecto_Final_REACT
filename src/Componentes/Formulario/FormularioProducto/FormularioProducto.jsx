import styles from "./FormularioProducto.module.css";

function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  manejarCambioImagen,
  //loading,
}) {
  return (
    <form onSubmit={manejarEnvio} className={styles.formulario}>
      <h3>Agregar Nuevo Producto</h3>

      <div>
        <label htmlFor="id">Id: </label>
        <input
          type="text"
          name="id"
          value={datosForm.id || ""}
          placeholder="Ej: 1"
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label htmlFor="nombre">Nombre del Producto: </label>
        <input
          type="text"
          name="nombre"
          value={datosForm.nombre || ""}
          placeholder="Ej: Teclado Mecánico"
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Precio: </label>
        <input
          type="number"
          name="precio"
          min="0"
          value={datosForm.precio || ""}
          placeholder="Ej: 95"
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Stock: </label>
        <input
          type="number"
          name="stock"
          min="0"
          value={datosForm.stock || ""}
          placeholder="Ej: 5"
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Imagen: </label>

        <input type="file" name="imagen" onChange={manejarCambioImagen} />
      </div>

      <button type="submit">Guardar</button>
    </form>
  );
}

export default FormularioProducto;
