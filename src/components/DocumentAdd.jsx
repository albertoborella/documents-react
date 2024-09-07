import React from 'react'
import { useState } from 'react'



const DocumentAdd = ({agregarDoc}) => {

    const [document, setDocument] = useState({
      id: null,
      codigo: '',
      titulo: '',
      contenido: ''
    })

    const handleChange = (e) => {
      const {name, value} = e.target
      setDocument({...document, [name]:value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      agregarDoc(document)
    }

        
  return (
    <form onSubmit={handleSubmit} >
      <label>Codigo</label>
      <input
       type="text"
       name="codigo"
       onChange={handleChange}
       value="" />
        
      <label>Titulo</label>
      <input
       type="text" 
       name="titulo"
       onChange={handleChange}
       value="" />
        
      <label>Contenido</label>
      <input
       type="text"
       name="contenido"
       onChange={handleChange}
       value=""
       />

      <button>Nuevo documento</button>
    </form>
  )
}


export default DocumentAdd