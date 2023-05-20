
import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext/index'
function TodoSearch(){
  const {
    searchvalue,
    setSearchValue
  }=React.useContext(TodoContext)
    return(
      <input placeholder="Cortar cebolla" 
      className="TodoSearch" 
      value={searchvalue}
      onChange={
        (e)=>{
          setSearchValue(e.target.value);
        }
      }
      />
    )
  }

export {TodoSearch  }