import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa6";

export default function Tarefa({ name, isActive, tarefas, setTarefas, id }) {
  const [active, setActive] = useState(isActive)

  useEffect(() => {
    let tarefasNovas = [...tarefas]
    tarefasNovas[id].isActive = active
    setTarefas(tarefasNovas)
    localStorage.setItem('tarefas', JSON.stringify(tarefasNovas))
  }, [active])

  return (
    <button onClick={() => { setActive(!active) }} className="Tarefa">
      <Checkbox isActive={active} />
      <span className={active ? 'text-primary' : ''}>{name}</span>
    </button>
  )
}

function Checkbox({ isActive }) {
  return (
    <div className={isActive ? 'check active' : 'check'}>
      {isActive && <FaCheck />}
    </div>
  )
}