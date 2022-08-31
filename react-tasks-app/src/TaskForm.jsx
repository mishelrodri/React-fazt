import { useState } from "react"; 


function TaskForm({createTask}) {
    const [title, setTitle] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(title)
 /*        const newTask={
            title,
            id:,
            description:"algo nuevo"
        } */

        createTask(title)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Escribe tu tarea"
      onChange={(e)=>setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
