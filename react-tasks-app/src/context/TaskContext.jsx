import {createContext, useState, useEffect} from 'react'
import { tasks as data} from "../data/tasks";


/* Nombre del contexto general */
export const TaskContext = createContext()


/* Componente que englobará todo, que renderiza un objeto de jsx */
export function TaskContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([...tasks,
    {
      title:task.title,
      id: tasks.length,
      description:task.description
    }])
  }
  
  
  function deleteTask(taskId){
    // console.log(taskId)
    setTasks(tasks.filter(task=>task.id !== taskId))
  }

  /* Para que se cargue el archivo que tiene el array */
  useEffect(()=>{
    setTasks(data)
},[])



  return (
   <TaskContext.Provider value={
    {
      tasks,
      deleteTask,
      createTask
    }
   }>
    {props.children}
   </TaskContext.Provider> 
  )
}

