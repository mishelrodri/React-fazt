import {createContext} from 'react'

/* Nombre del contexto general */
export const TaskContext = createContext()

/* Componente que englobará todo, que renderiza un objeto de jsx */
export function TaskContextProvider(props) {
  return (
   <TaskContext.Provider>
    {props.children}
   </TaskContext.Provider> 
  )
}

