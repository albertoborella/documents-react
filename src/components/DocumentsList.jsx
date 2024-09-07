import React from 'react'

const DocumentsList = ({documents, deleteDoc}) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Codigo</th>
        <th>Titulo</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
        {
            documents.length > 0 ? 
                documents.map((doc) => (
                <tr key={doc.id}>
                    <td>{doc.codigo}</td>
                    <td>{doc.titulo}</td>
                <td>
                <button className="button muted-button">Editar</button>{' '}
                <button className="button muted-button" onClick={() => deleteDoc(doc.id)}>Eliminar</button>
                </td>
                 </tr>
                 )) : (
                    <tr colSpan={3}>No hay documentos cargados</tr>
                 )
        }
    

      
    </tbody>
  </table>
  )
}

export default DocumentsList