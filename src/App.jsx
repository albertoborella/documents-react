import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import DocumentsList from './components/DocumentsList'
import DocumentAdd from './components/DocumentAdd';

function App() {

  const docData = [
    {id: uuidv4(), codigo:'OS-1274', titulo: 'Documento instalaciones', contenido: ''},
    {id: uuidv4(), codigo:'OS-0025', titulo: 'Documento administrativo', contenido: ''},
    {id: uuidv4(), codigo:'OS-0173', titulo: 'Proceso de elaboración', contenido: ''},
  ]

  const [documents, setDocuments] = useState(docData)

  // Agregar un documento
  const agregarDoc = (documento) => {
    documento.id = uuidv4();
    setDocuments([...documents, documento])
  }
  // Eliminar un documento
  const deleteDoc = (id) => {
    setDocuments(documents.filter((doc) => doc.id != id))
  }

  return (
    <div className="container">
      <h1>Documentación</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Agregar documento</h2>
          <DocumentAdd agregarDoc={agregarDoc} />
        </div>
        <div className="flex-large">
          <h2>Ver documentos</h2>
          <DocumentsList documents={documents} deleteDoc={deleteDoc} />
        </div>
      </div>
    </div>
  )
}

export default App
