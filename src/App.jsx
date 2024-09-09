import { useEffect, useRef, useState } from 'react';
import './index.css'
import Tarefa from './Tarefa';
import Modal from './Modal';

function App() {
  const [tarefasTotais, setTarefasTotais] = useState(0)
  const [tarefasConcluidas, setTarefasConcluidas] = useState(0)
  const [porcentagemTarefas, setPorcentagemTarefas] = useState(0)
  const [viewModal, setViewModal] = useState(false)
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('tarefas')) {
      localStorage.setItem('tarefas', '[]')
    } else {
      setTarefas(JSON.parse(localStorage.getItem('tarefas')))
    }
  }, [viewModal])

  useEffect(() => {
    setPorcentagemTarefas((tarefasConcluidas / tarefasTotais * 100))
  }, [tarefasConcluidas, tarefasTotais])

  useEffect(() => {
    setTarefasTotais(tarefas.length)
    setTarefasConcluidas(tarefas.filter((tarefa) => tarefa.isActive).length)
  }, [tarefas])

  return (
    <div className="App">
      <header>
        <div>
          <h1 className='text-primary'>To Do List</h1>
          <p>Tenha controle do seu dia!</p>
        </div>
        <div className='btns'>
          <button onClick={() => { setViewModal(true) }}>
            Criar Tarefa
          </button>
          <button onClick={() => {
            localStorage.setItem('tarefas', '[]')
            setTarefas([])
          }}>
            Limpar tarefas
          </button>
        </div>
      </header>
      <div className="porcentagem-tarefas">
        <div className="numeros">
          <span className='text-primary'>{tarefasConcluidas} Tarefas Concluídas</span>
          <span>{tarefasTotais} Tarefas Totais</span>
        </div>
        <div className="barra-porcentagem">
          <div className="barra-concluido" style={{ width: `${porcentagemTarefas}%` }}></div>
        </div>
      </div>
      <main>
        {tarefas.length > 0 ? tarefas.map((tarefa, i) => <Tarefa tarefas={tarefas} setTarefas={setTarefas} key={i} id={i} isActive={tarefa.isActive} name={tarefa.name}></Tarefa>) : <span className='text-primary'>Crie uma tarefa agora mesmo!</span>}
      </main>
      {viewModal && <Modal setView={setViewModal} />}
    </div>
  );
}

export default App;