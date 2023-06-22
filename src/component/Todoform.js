import { useState } from "react"

const TodoForm = ({addTodo}) => {

    const [value ,setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        addTodo(value)

        setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input value= {value} type="text" className="todo-input" placeholder="Enter your task" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">ADD</button>
        </form>
    )
}

export default TodoForm