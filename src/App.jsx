import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DocumentsList from "./components/DocumentsList";
import DocumentAdd from "./components/DocumentAdd";

function App() {
  const docData = [
    {
      id: uuidv4(),
      codigo: "OS-1274",
      titulo: "Documento instalaciones",
      contenido: "",
    },
    {
      id: uuidv4(),
      codigo: "OS-0025",
      titulo: "Documento administrativo",
      contenido: "",
    },
    {
      id: uuidv4(),
      codigo: "OS-0173",
      titulo: "Proceso de elaboración",
      contenido: "",
    },
  ];
  const [documents, setDocuments] = useState(docData)
  const [editData, setEditData] = useState(null)

  // Agregar un documento
  const agregarDoc = (documento) => {
    documento.id = uuidv4();
    setDocuments([...documents, documento]);
  };
  // Eliminar un documento
  const deleteDoc = (id) => {
    setDocuments(documents.filter((doc) => doc.id != id));
  };
  // Editar un documento
  const editarDocumento = (documento) => {
    console.log(editarDocumento)
    const newDocument = documents.map(el => el.id === documento.id ? documento : el)
    setDocuments(newDocument)
    setEditData(null)
  }

  return (
    <div className="container">
      <h1>Documentación</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Agregar documento</h2>
          <DocumentAdd agregarDoc={agregarDoc} editarDocumento={editarDocumento} editData={editData} />
        </div>
        <div className="flex-large">
          <h2>Ver documentos</h2>
          <DocumentsList documents={documents} deleteDoc={deleteDoc} setEditData={setEditData} />
        </div>
      </div>
    </div>
  );
}

export default App;
