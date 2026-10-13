import { useState } from "react";
import FormularioProducto from "../FormularioProducto/FormularioProducto.jsx";

function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    id: "",
    nombre: "",
    precio: "",
    stock: "",
  });

  const [imagenFile, setImagenFile] = useState(null);
  //const [loading, setLoading] = useState(false);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;

    if ((name === "precio" || name === "stock") && value < 0) {
      return;
    }

    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  const manejarCambioImagen = (evento) => {
    //if (evento.target.files && evento.target.files.length > 0) {
    setImagenFile(evento.target.files[0]);
    //}
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    if (!imagenFile) {
      alert("Por favor, selecciona una imagen para el producto.");
      return;
    }
    //setLoading(true);

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const formData = new FormData();
    formData.append("image", imagenFile);
    try {
      console.log("Subiendo imagen a Imgbb...");

      const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const datosImgbb = await respuestaImgbb.json();
      if (datosImgbb.success) {
        console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);

        const productoCompleto = {
          ...datosForm,
          urlImagen: datosImgbb.data.url, // URL obtenida de Imgbb
        };
        console.log("¡Producto completo listo para la API", productoCompleto);
        //alert("¡Imagen subida con éxito y producto procesado!");
      } else {
        throw new Error("La subida de la imagen a Imgbb falló.");
      }
    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Por favor, intenta de nuevo.");
    }
    //finally {
    //setLoading(false);
    //}
  };

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
      //loading={loading}
    />
  );
}

export default FormularioContainer;
