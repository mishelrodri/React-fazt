import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm';
import { tasks as data} from "./data/tasks";
import { useState, useEffect } from "react";

function App() {

  const [tasks, setTasks] = useState([]);

  /* Para que se cargue el archivo que tiene el array */
  useEffect(()=>{
      setTasks(data)
  },[])

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

  return (
    <>
      <TaskForm  createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </>
  )
}

export default App