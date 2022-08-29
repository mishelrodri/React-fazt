import './task.css'

export function TaskCard({ready}) {
  return (
    <div className="card">
      <h1>Mi primera Tarea</h1>
      <span className={ready ? ".bg-green" : "bg-red"}>{ready ? "tarea realizada" : "tarea pendiente"}</span>
    </div>
  );
}
