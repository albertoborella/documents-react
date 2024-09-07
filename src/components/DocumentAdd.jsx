import React from "react";
import { useState } from "react";

const DocumentAdd = ({ agregarDoc }) => {
  const [document, setDocument] = useState({
    id: null,
    codigo: "",
    titulo: "",
    contenido: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocument({ ...document, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarDoc(document);
    setDocument({
      id: null,
      codigo: "",
      titulo: "",
      contenido: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="codigo"
        placeholder="Código"
        value={document.codigo}
        onChange={handleChange}
      />

      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={document.titulo}
        onChange={handleChange}
      />

      <input
        type="text"
        name="contenido"
        placeholder="Escriba un texto"
        value={document.contenido}
        onChange={handleChange}
      />

      <button>Agregar</button>
    </form>
  );
};
export default DocumentAdd;
