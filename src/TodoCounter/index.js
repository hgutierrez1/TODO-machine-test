import React from 'react'
import { TodoContext } from '../TodoContext/index'
import './TodoCounter.css';
function TodoCounter(){
  const {
    completedTODOS,
    totalTODOS,
  }= React.useContext(TodoContext)
    if (totalTODOS===completedTODOS){
      return(
        <h1 className='TodoCounter'>
            Felicidades!! No tienes ninguna tarea pendiente.
          </h1>
      )
    } else{
      return(
        <h2 className="TodoCounter">
          <span> {completedTODOS} </span>
          Tareas completadas de
          <span> {totalTODOS} </span>
        </h2>
      )
    }
  }

export {TodoCounter}