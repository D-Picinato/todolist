import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

export default function Modal({ setView }) {
  const inputRef = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)

    let tarefas = JSON.parse(localStorage.getItem('tarefas'))
    tarefas.push(
      {
        name: formData.get('content'),
        isActive: false
      }
    )
    localStorage.setItem('tarefas', JSON.stringify(tarefas))

    setView(false)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="Modal">
      <form autoComplete="off" onSubmit={handleSubmit} className="container">
        <button type="button" onClick={() => { setView(false) }} className="marker"><IoMdClose /></button>
        <div>
          <h2 className="text-primary">Crie sua tarefa</h2>
          <span>Sempre um passo de cada vez</span>
        </div>
        <input required ref={inputRef} type="text" name="content" id="content" placeholder="Escreva uma tarefa..." />
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  )
}