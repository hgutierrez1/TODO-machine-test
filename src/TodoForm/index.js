import React from "react";
import './TodoForm.css'
import { TodoContext } from '../TodoContext/index'
function TodoForm(){
    const{
        addTODO,
        setOpenModal,
    }=React.useContext(TodoContext)
    const [newTODOvalue,setNewTODOValue]=React.useState('');
    
    const onSubmitTODO=(e)=>{
        e.preventDefault();
        addTODO(newTODOvalue);
        setOpenModal(false)
    }
    const onCancelTODO=()=>{
        setOpenModal(false)
    }

    const onChange=(event)=>{
        setNewTODOValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmitTODO}>
            <label>Escribe tu nuevo TODO</label>
            <textarea placeholder="Cortar cebolla para el almuerzo"
            value={newTODOvalue}
            onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button 
                TodoForm-button--cancel"
                onClick={onCancelTODO}
                >Cancelar</button>
                <button
                type="submit"
                className="TodoForm-button
                TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }