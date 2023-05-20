import React from 'react';
import { TodoSearch } from '../TodoSearch/index';
import { TodoCounter } from '../TodoCounter/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { TodoLoading } from '../TodoLoading/index';
import { TodoError } from '../TodoError/index';
import { EmptyTodo } from '../EmptyTodo/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm/index.js'
function AppUI(){
  const{
    loading,
    error,
    searchedTODOS,
    completeTODO,
    deleteTODO,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)
    return (
        <>
          <TodoCounter/>
          <TodoSearch/>
              <TodoList>
            {loading && <TodoLoading/>}
            {error && <TodoError/>}
            {(!loading && searchedTODOS.length===0)&&<EmptyTodo/>}
            {searchedTODOS.map(todo=>(
              <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={()=>completeTODO(todo.text,todo.completed)}
              onDelete={()=>deleteTODO(todo.text)}
              />
            ))}
          </TodoList>
          
            <CreateTodoButton
            setOpenModal={setOpenModal}
            />
            {openModal&&(
              <Modal>
                <TodoForm>

                </TodoForm>
              </Modal>
            )}
            
        </>
      );
}
export { AppUI }