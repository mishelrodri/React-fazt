import { useState } from "react"; 


function TaskForm({createTask}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(title)
 /*        const newTask={
            title,
            id:,
            description:"algo nuevo"
        } */

        createTask({
          title,
          description
        })

        setTitle('')
        setDescription('')

        // e.target.reset()
    }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Escribe tu tarea"
      onChange={(e)=>setTitle(e.target.value)}
      value={title}
      autoFocus/>
      <textarea placeholder="escribe una descripcion aqui" onChange={
        (e)=>setDescription(e.target.value)
      } value={description} ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
