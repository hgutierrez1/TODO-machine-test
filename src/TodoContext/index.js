import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext= React.createContext()

function TodoProvider({children}){
    const{
        item:TODO,
        saveItem:saveTODOS,
        loading,
        error,
      }=useLocalStorage('TODOS_V1',[])
      const [searchvalue,setSearchValue]=React.useState('');
      const [openModal,setOpenModal]=React.useState(false);

      const addTODO=(text)=>{
        const newTODO =[...TODO];
        newTODO.push({
          text,
          completed:false
        })
        saveTODOS(newTODO);
      }

      const completedTODOS=TODO.filter(todo=>!!todo.completed).length;
      const totalTODOS=TODO.length 
      
      const searchedTODOS= TODO.filter(todo=>
        {
          const TODOtext=todo.text.toLowerCase();
          const searchText=searchvalue.toLowerCase();
          return TODOtext.includes(searchText)
        })
        const completeTODO=(text,completed)=>{
          const newTODO =[...TODO];
          const TODOindex=newTODO.findIndex((todo)=>todo.text === text)
          newTODO[TODOindex].completed = !completed;
          saveTODOS(newTODO);
        }
        const deleteTODO=(text)=>{
          const newTODO =[...TODO];
          const TODOindex=newTODO.findIndex((todo)=>todo.text === text)
          newTODO.splice(TODOindex,1);
          saveTODOS (newTODO);
        }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTODOS,
            totalTODOS,
            searchvalue,
            setSearchValue,
            searchedTODOS,
            completeTODO,
            deleteTODO,
            openModal,
            setOpenModal,
            addTODO
        }}>
            {children}
        </TodoContext.Provider>
    )
}


<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext,TodoProvider }