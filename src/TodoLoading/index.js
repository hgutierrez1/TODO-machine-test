import React from 'react';
/* import './TodoLoading.css'
 */function TodoLoading(){
  const style={height:'3.5rem'}

    return(
        <>
        <li style={style} className="TodoItem">
            <p className={`Todo-Item-p`}></p>
        </li>
        <li style={style} className="TodoItem">
            <p className={`Todo-Item-p`}></p>
        </li>
        <li style={style} className="TodoItem">
            <p className={`Todo-Item-p`}></p>
        </li>
        <li style={style} className="TodoItem">
            <p className={`Todo-Item-p`}></p>
        </li>
        <li style={style} className="TodoItem">
            <p className={`Todo-Item-p`}></p>
        </li>
        <li style={style} className="TodoItem">
            <p className={`Todo-Item-p`}></p>
        </li>
        
        
        </>

        
    )
  }

export {TodoLoading  }