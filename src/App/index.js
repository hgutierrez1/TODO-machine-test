import React from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext';


/* const defaultTodos=[
  {text:'Cortar cebolla',completed:false},
  {text:'Llorar con la llorona',completed:false},
  {text:'Tomar el curso de React.js',completed:false},
  {text:'recuperar nivel en fh',completed:false},
  {text:'Ejercicio',completed:true},
  {text:'Usar estados derivados',completed:false},
  {text:'LALALALALALA',completed:false}
]

localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))

localStorage.removeItem('TODOS_V1') */
function App() {
 
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
  )
}

export default App;




