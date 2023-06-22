import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Todo = ({task, toggleComplete}) => {
    return(
        <div className="Todo">
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : ""}`}>
                {task.task}
            </p>
            <div className='fa-icon'>
                <FontAwesomeIcon icon={faPenToSquare} className='faPen'/>
                <FontAwesomeIcon icon={faTrash}/>
            </div>
        </div>
    )
}

export default Todo