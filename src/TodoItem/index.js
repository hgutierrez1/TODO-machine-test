import {CheckIcon} from '../TodoIcon/CheckIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import './TodoItem.css'
function TodoItem(props){

    return(
      <li className="TodoItem">
        <CheckIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p 
        className={`Todo-Item-p ${props.completed && "TodoItem-p--complete"}`}
        >
          {props.text}
        </p>
        <DeleteIcon
        onDelete={props.onDelete}
        />
      </li>
    )
  }

export {TodoItem} 